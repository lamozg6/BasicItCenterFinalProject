import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExtendedValidationPipe } from './utils';
import * as cookieParser from 'cookie-parser';
import { json } from 'express';
import { ExceptionsFilter } from './utils/filters/ExceptionsFilter';
import { ResponseFormat } from './interceptors';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ExceptionsFilter());
  app.useGlobalPipes(new ExtendedValidationPipe());
  app.useGlobalInterceptors(new ResponseFormat());
  app.use(cookieParser());
  app.enableCors();
  app.use(json({ limit: '100mb' }));

  await app.listen(process.env.SERVER_PORT);
  console.info('App server listening on port', process.env.SERVER_PORT);
}
