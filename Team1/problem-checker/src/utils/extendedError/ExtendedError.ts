import { IErrorDetail, IError } from './types';
import { EErrorCode } from '../enums';
import * as _ from 'underscore.string';

export class ExtendedError extends Error {
  private readonly __code: EErrorCode;
  private readonly __details: undefined | Array<IErrorDetail>;
  private __codes_stack: Array<string>;

  constructor(code: string, message: string, details?: Array<IErrorDetail>) {
    super(message);
    this.__code = code as EErrorCode;
    this.__details = details;
    this.__codes_stack = [code];
    if (this.name === 'Error') {
      this.name = _.classify((this.__code + '_ERROR').toLowerCase());
    }
  }

  get code() {
    return this.__code;
  }

  get details() {
    return this.__details;
  }

  get codes_stack() {
    return this.__codes_stack;
  }

  toString(): string {
    return `Code: ${this.code}, Message: ${super.toString()}`;
  }

  static from(
    error: Error | ExtendedError | (Error & { code: string }),
    code?: string,
  ): ExtendedError {
    let new_error: ExtendedError;
    if (error instanceof ExtendedError) {
      new_error = new ExtendedError(error.code, error.message, error.details);
      new_error.__codes_stack = error.__codes_stack;
      if (code) {
        new_error.__codes_stack.unshift(code);
      }
    } else {
      const parsed_code =
        (error as Error & { code: string }).code ??
        code ??
        EErrorCode.UNEXPECTED;
      new_error = new ExtendedError(parsed_code, error.message);
    }
    return new_error;
  }

  // FIXME: Remove this function, or rename it something like "fromData"
  static fromError(error: IError): ExtendedError {
    return new ExtendedError(
      error.code,
      error.message,
      error.details ?? undefined,
    );
  }

  toJson(): IError {
    return {
      code: this.code,
      message: this.message,
      details: this.details ?? null,
    };
  }
}
