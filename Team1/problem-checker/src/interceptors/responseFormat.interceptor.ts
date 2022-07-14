import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface Response {
  status?: number;
  data?: unknown;
  error?: string;
}

@Injectable()
export class ResponseFormat<T> implements NestInterceptor<T, Response> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response> {
    return next.handle().pipe(map((data) => ({
      status: HttpStatus.OK,
      error: null,
      data: data ?? null,
    })));
  }
}
