import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './modules/users/users.module';
import { UserEntity } from './storage/db/entities/User.entity';
import { TestsModule } from './modules/tests/tests.module';
import { TestEntity } from './storage/db/entities/Test.entity';
import { ProblemEntity } from './storage/db/entities/Problem.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [
        UserEntity,
        TestEntity,
        ProblemEntity,
      ],
      synchronize: true,
    }),
    UsersModule,
    TestsModule,
  ],
})
export class AppModule {}
