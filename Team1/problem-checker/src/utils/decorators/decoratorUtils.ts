interface IDecorizeParams {
  target: Object | Function;
  decorator: MethodDecorator | PropertyDecorator | ClassDecorator;
}

interface IPropertyDecorizeParams extends IDecorizeParams {
  propertyKey: string | symbol;
  decorator: PropertyDecorator;
}

interface IMethodDecorizeParams<T> extends IDecorizeParams {
  propertyKey: string | symbol;
  descriptor: TypedPropertyDescriptor<T>;
  decorator: MethodDecorator;
}

interface IClassDecorizeParams extends IDecorizeParams {
  target: Function;
  decorator: ClassDecorator;
}

interface ICachedDecorizer {
  decorator: MethodDecorator | PropertyDecorator | ClassDecorator;
}

type ICachedPropertyDecorizer = ICachedDecorizer;

interface ICachedMethodDecorizer<T> extends ICachedDecorizer {
  descriptor: TypedPropertyDescriptor<T>;
}

type ICachedClassDecorizer = ICachedDecorizer;

export function methodDecorize<T>(
  params: IMethodDecorizeParams<T>,
): TypedPropertyDescriptor<T> {
  return (
    params.decorator(params.target, params.propertyKey, params.descriptor) ||
    params.descriptor
  );
}

export function propertyDecorize(params: IPropertyDecorizeParams): void {
  params.decorator(params.target, params.propertyKey);
}

export function classDecorize(params: IClassDecorizeParams): void {
  params.decorator(params.target);
}

export function createCachedMethodDecorizer<T>(
  target: Object,
  propertyKey: string | symbol,
) {
  return function (params: ICachedMethodDecorizer<T>) {
    return methodDecorize<T>({
      target,
      propertyKey,
      decorator: params.decorator as MethodDecorator,
      descriptor: params.descriptor,
    });
  };
}

export function createCachedPropertyDecorizer(
  target: Object,
  propertyKey: string | symbol,
) {
  return function (params: ICachedPropertyDecorizer) {
    return propertyDecorize({
      target,
      propertyKey,
      decorator: params.decorator as PropertyDecorator,
    });
  };
}

export function createCachedClassDecorizer(target: Function) {
  return function (params: ICachedClassDecorizer) {
    return classDecorize({
      target,
      decorator: params.decorator as ClassDecorator,
    });
  };
}

export function stringToBoolean<T>(value: T): T | boolean {
  if (typeof value === 'string') {
    switch (value.toLowerCase()) {
      case 'true':
        return true;
      case 'false':
        return false;
      default:
        return value;
    }
  }

  return value;
}
