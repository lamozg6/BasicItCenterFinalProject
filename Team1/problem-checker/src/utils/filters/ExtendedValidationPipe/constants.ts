import { EErrorCode } from '../../enums';

export const VALIDATION_ERROR_CODES = new Map<string, EErrorCode>([
  ['isNumber', EErrorCode.INCORRECT_NUMBER_FORMAT],
  ['isBoolean', EErrorCode.INCORRECT_BOOLEAN_FORMAT],
  ['isString', EErrorCode.INCORRECT_STRING_FORMAT],
  ['isDate', EErrorCode.INCORRECT_DATE_FORMAT],
  ['isDefined', EErrorCode.NOT_DEFINED],
  ['isEmail', EErrorCode.INCORRECT_EMAIL_FORMAT],
  ['isInt', EErrorCode.INCORRECT_INTEGER_FORMAT],
  ['isJSON', EErrorCode.INCORRECT_JSON_FORMAT],
  ['isUUID', EErrorCode.INCORRECT_UUID_FORMAT],
  ['min', EErrorCode.INCORRECT_MIN_FORMAT],
  ['max', EErrorCode.INCORRECT_MAX_FORMAT],
  ['minLength', EErrorCode.INCORRECT_MIN_LENGTH_FORMAT],
  ['maxLength', EErrorCode.INCORRECT_MAX_LENGTH_FORMAT],
  ['isEnum', EErrorCode.INCORRECT_ENUM_FORMAT],
]);
