import { Body, Controller, Post } from '@nestjs/common';
import {
  IProblem,
  IProblem_create_ReqBody_DTO,
} from 'src/common/types/problem.types';
import { CryptoUtils } from 'src/utils';
import { Problem_create_ReqBody_DTO } from './dto/Problem.create.ReqBody.dto';
import { Problem_create_ResBody_DTO } from './dto/Problem.create.ResBody.dto';
import { ProblemsService } from './problems.service';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Post()
  async create(
    @Body() args: Problem_create_ReqBody_DTO,
  ): Promise<Problem_create_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return this.problemsService.create({ id, ...args });
  }
}
