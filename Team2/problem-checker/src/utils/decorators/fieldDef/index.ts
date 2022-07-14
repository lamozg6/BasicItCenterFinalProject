import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNumber,
  IsDate,
  IsBoolean,
  IsJSON,
  IsUUID,
  Min,
  Max,
  MinLength,
  MaxLength,
  ValidateIf,
  IsEnum,
  ValidateNested,
  IsDefined,
  IsString,
  registerDecorator,
  IsArray,
  IsUrl,
  ValidationOptions,
  ValidationArguments,
  ArrayMinSize,
  ArrayMaxSize,
} from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { IFieldConfig } from './types';
import {
  createCachedPropertyDecorizer,
  stringToBoolean,
} from '../decoratorUtils';
import { ExtendedError } from '../../extendedError';
import { EErrorCode } from '../../enums';

export function FieldDef(config: IFieldConfig): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol): void {
    const {
      is_email,
      is_int,
      is_bigint,
      is_json,
      is_uuid,
      is_url,
      is_array = false,
      min,
      max,
      min_length,
      max_length,
      min_size,
      max_size,
      custom_validator,
      ...swaggerConfig
    } = config;
    const { required, nullable, type, enum: enumValues } = swaggerConfig;

    if (typeof min !== 'undefined' && typeof max !== 'undefined' && min > max) {
      throw new ExtendedError(
        EErrorCode.INVALID_CONFIGURATION,
        'On validation step `min` value could not be higher from `max` value',
      );
    }
    if (
      typeof min_length !== 'undefined' &&
      typeof max_length !== 'undefined' &&
      min_length > max_length
    ) {
      throw new ExtendedError(
        EErrorCode.INVALID_CONFIGURATION,
        'On validation step `min_length` value could not be higher from `max_length` value',
      );
    }
    if (
      typeof min_size !== 'undefined' &&
      typeof max_size !== 'undefined' &&
      min_size > max_size
    ) {
      throw new ExtendedError(
        EErrorCode.INVALID_CONFIGURATION,
        'On validation step `min_size` value could not be higher from `max_size` value',
      );
    }

    const decorate = createCachedPropertyDecorizer(target, propertyKey);
    const validationOptions: ValidationOptions = {
      each: is_array,
    };

    decorate({
      decorator: ApiProperty({
        ...swaggerConfig,
        isArray: is_array,
      }),
    });

    if (!required || nullable) {
      decorate({
        decorator: ValidateIf(
          (object, value) =>
            !(
              (!required && typeof value === 'undefined') ||
              (nullable && value === null)
            ),
        ),
      });
    }

    if (is_array) {
      decorate({
        decorator: Transform(({ value }) => {
          if (value === null || value === undefined) {
            return value;
          }
          return Array.isArray(value) ? value : [value];
        }),
      });
      decorate({
        decorator: IsArray(),
      });
    }

    if (type === Number) {
      decorate({
        decorator: Type(() => Number),
      });
      decorate({
        decorator: IsNumber(undefined, validationOptions),
      });
    } else if (type === Boolean) {
      decorate({
        decorator: Transform(({ value }) => stringToBoolean(value)),
      });
      decorate({
        decorator: IsBoolean(validationOptions),
      });
    } else if (type === String) {
      decorate({
        decorator: Type(() => String),
      });
      decorate({
        decorator: IsString(validationOptions),
      });
      registerDecorator({
        target: target.constructor,
        propertyName: propertyKey as string,
        validator: {
          validate(value: string): boolean {
            return typeof value !== 'string' || value.trim().length > 0;
          },
          defaultMessage(validationArguments: ValidationArguments): string {
            return `Property ${validationArguments.property} must be a non-empty string`;
          },
        },
      });
    } else if (type === Date) {
      decorate({
        decorator: Type(() => Date),
      });
      decorate({
        decorator: IsDate(validationOptions),
      });
    } else {
      decorate({
        decorator: IsDefined(),
      });
      decorate({
        decorator: Type(() => type),
      });
      decorate({
        decorator: ValidateNested(validationOptions),
      });
    }

    if (is_email) {
      decorate({
        decorator: IsEmail(undefined, validationOptions),
      });
    }
    if (is_int) {
      decorate({
        decorator: Type(() => Number),
      });
      decorate({
        decorator: IsInt(validationOptions),
      });
    }
    if (is_bigint) {
      registerDecorator({
        target: target.constructor,
        propertyName: propertyKey as string,
        validator: {
          validate(value: unknown): boolean {
            return typeof value === 'number' && Number.isInteger(value);
          },
          defaultMessage(validationArguments: ValidationArguments): string {
            return `Property ${validationArguments.targetName} must be a integer`;
          },
        },
      });
      decorate({
        decorator: Type(() => BigInt),
      });
    }
    if (is_json) {
      decorate({
        decorator: IsJSON(validationOptions),
      });
    }
    if (is_uuid) {
      decorate({
        decorator: IsUUID('all', validationOptions),
      });
    }
    if (is_url) {
      decorate({
        decorator: IsUrl(undefined, validationOptions),
      });
    }
    if (typeof min !== 'undefined') {
      decorate({
        decorator: Min(min, validationOptions),
      });
    }
    if (typeof max !== 'undefined') {
      decorate({
        decorator: Max(max, validationOptions),
      });
    }
    if (typeof min_length !== 'undefined') {
      decorate({
        decorator: MinLength(min_length, validationOptions),
      });
    }
    if (typeof max_length !== 'undefined') {
      decorate({
        decorator: MaxLength(max_length, validationOptions),
      });
    }
    if (typeof min_size !== 'undefined') {
      decorate({
        decorator: ArrayMinSize(min_size, {
          ...validationOptions,
          each: false,
        }),
      });
    }
    if (typeof max_size !== 'undefined') {
      decorate({
        decorator: ArrayMaxSize(max_size, {
          ...validationOptions,
          each: false,
        }),
      });
    }
    if (typeof enumValues !== 'undefined') {
      decorate({
        decorator: IsEnum(enumValues, validationOptions),
      });
    }

    if (custom_validator) {
      registerDecorator({
        target: target.constructor,
        propertyName: propertyKey as string,
        validator: custom_validator,
      });
    }
  };
}

export interface CustomValidationArguments<T extends object>
  extends ValidationArguments {
  object: T;
}

export { ValidatorConstraintInterface } from 'class-validator';
