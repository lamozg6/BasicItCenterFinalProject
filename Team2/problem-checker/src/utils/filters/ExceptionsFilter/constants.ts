import { HttpStatus } from '@nestjs/common';
import { EErrorCode } from '../../enums';

const STATUS_ERROR_CODES = new Map<HttpStatus, Array<EErrorCode>>([
  [
    HttpStatus.BAD_REQUEST,
    [
      EErrorCode.VALIDATION_ERROR,
      EErrorCode.UNEXPECTED,
      EErrorCode.UNDEFINED,
      EErrorCode.ALREADY_EXISTS,
      EErrorCode.TIMEOUT_ERROR,
      EErrorCode.NOT_SUPPORTED,
      EErrorCode.INVALID_FORMAT,
      EErrorCode.AUTHORIZATION_MISSING_HEADER,
      EErrorCode.AUTHORIZATION_INVALID_HEADER,
      EErrorCode.PASSWORD_INCORRECT,
      EErrorCode.PASSWORD_MISSING,
    ],
  ],
  [
    HttpStatus.NOT_FOUND,
    [
      EErrorCode.NOT_FOUND,
      EErrorCode.USER_NOT_FOUND,
      EErrorCode.EMAIL_VERIFICATION_TOKEN_NOT_FOUND,
    ],
  ],
  [
    HttpStatus.INTERNAL_SERVER_ERROR,
    [
      EErrorCode.INITIALIZATION_ERROR,
      EErrorCode.INVALID_CONFIGURATION,
      EErrorCode.EXECUTION_ERROR,
      EErrorCode.INITIALIZATION_ERROR,
      EErrorCode.INITIALIZATION_ERROR,
      EErrorCode.INITIALIZATION_ERROR,
    ],
  ],
  [HttpStatus.FORBIDDEN, [EErrorCode.FORBIDDEN]],
]);

export const ERROR_CODE_STATUSES = new Map<EErrorCode, HttpStatus>(
  [...STATUS_ERROR_CODES.entries()].flatMap(([status, codes]) =>
    codes.map((code) => [code, status]),
  ),
);
