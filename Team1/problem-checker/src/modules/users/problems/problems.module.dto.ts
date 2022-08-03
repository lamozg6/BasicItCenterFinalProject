import { Module } from '@nestjs/common';
import { ProblemsController } from './problems.controller.dto';
import { ProblemsService } from './problems.service';

@Module({
  controllers: [ProblemsController],
  providers: [ProblemsService],
})
export class ProblemsModule {}
