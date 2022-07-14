import { EErrorCode, EErrorTarget } from '../enums';

export interface IErrorDetail {
  target: EErrorTarget;
  target_value: string;
  message: string;
  code: EErrorCode;
}

export interface IError {
  code: EErrorCode;
  message: string;
  details: null | Array<IErrorDetail>;
}
