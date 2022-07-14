import {
  ValidationError,
  ValidationPipe,
  ValidationPipeOptions,
} from '@nestjs/common';
import { EErrorCode, EErrorTarget } from '../../enums';
import { ExtendedError, IErrorDetail } from '../../extendedError';
import { VALIDATION_ERROR_CODES } from './constants';

export class ExtendedValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      transform: true,
      exceptionFactory: ExtendedValidationPipe.validationErrorTransformer,
      ...options,
    });
  }

  private static validationErrorTransformer(errors: ValidationError[]) {
    const details = ExtendedValidationPipe.getErrors(errors);

    return new ExtendedError(
      EErrorCode.VALIDATION_ERROR,
      'Validation error',
      details,
    );
  }

  private static getErrors(
    errors: Array<ValidationError>,
    root_path = '',
  ): Array<IErrorDetail> {
    const details: Array<IErrorDetail> = errors.flatMap((error) =>
      error.constraints
        ? Object.entries(error.constraints).map(
            ([validation_type, message]) => ({
              target: EErrorTarget.INPUT_FIELD,
              target_value: root_path
                ? [root_path, error.property].join('.')
                : error.property,
              message,
              code:
                VALIDATION_ERROR_CODES.get(validation_type) ||
                EErrorCode.VALIDATION_ERROR,
            }),
          )
        : [],
    );

    details.push(
      ...errors.flatMap((error) =>
        error.children?.length
          ? ExtendedValidationPipe.getErrors(
              error.children,
              root_path
                ? [root_path, error.property].join('.')
                : error.property,
            )
          : [],
      ),
    );

    return details;
  }
}
