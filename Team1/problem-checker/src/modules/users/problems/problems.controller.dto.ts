import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProblemsService } from './problems.service';
import {
  Problem_create_ReqBody_DTO,
  Problem_create_ResBody_DTO,
  Problem_delete_ReqParam_DTO,
  Problem_delete_ResBody_DTO,
  Problem_getById_ReqParam_DTO,
  Problem_getById_ResBody_DTO,
} from './dto';

@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Post()
  async create(
    @Body() args: Problem_create_ReqBody_DTO,
  ): Promise<Problem_create_ResBody_DTO> {
    return this.problemsService.create(args);
  }

  @Get('/:id')
  async getById(
    @Param() args: Problem_getById_ReqParam_DTO,
  ): Promise<Problem_getById_ResBody_DTO> {
    return this.problemsService.getById(args);
  }
  @Delete('/:id')
  async delete(
    @Param() args: Problem_delete_ReqParam_DTO,
  ): Promise<Problem_delete_ResBody_DTO> {
    return this.problemsService.delete(args);
  }
}
