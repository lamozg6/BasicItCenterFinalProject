import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { EErrorCode, EResponseStatus } from '../../enums';
import { IErrorDetail } from '../../interfaces';
import { ExtendedError } from '../../../utils';

import { ERROR_CODE_STATUSES } from './constants';
import { QueryFailedError } from 'typeorm';

@Catch()
export class ExceptionsFilter implements ExceptionFilter<unknown> {
  catch(exception: unknown, host: ArgumentsHost) {
    console.log('exception', exception)
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Unexpected error';
    let code = EErrorCode.UNEXPECTED;
    let details: null | Array<IErrorDetail> = null;

    if (exception instanceof ExtendedError) {
      ({ code, message, details } = exception.toJson());
      status =
        ERROR_CODE_STATUSES.get(code) || HttpStatus.INTERNAL_SERVER_ERROR;
    }
      // FIXME check for Error and HttpException instances would be removed
    // when whole app would use same Error classes
    else if (exception instanceof HttpException) {
      message = exception.message;
      status = exception.getStatus();
    }
    // TypeORM Query Exception
    else if (exception instanceof QueryFailedError) {
      message = 'Bad Request';
      status = HttpStatus.BAD_REQUEST;
    } else if (exception instanceof Error) {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      if (exception.message) {
        message = exception.message;
      }

      code = ExtendedError.from(exception).code;
    }
    // TODO
    response.status(status).json({
      status: EResponseStatus.ERROR,
      data: null,
      error: {
        message: message+details,
        code
      }
    });
  }
}
