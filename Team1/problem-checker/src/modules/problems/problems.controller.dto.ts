import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProblemsService } from './problems.service';
import {
  Problem_create_ReqBody_DTO,
  Problem_create_ResBody_DTO,
  Problem_delete_ReqParam_DTO,
  Problem_delete_ResBody_DTO,
  Problem_getById_ReqParam_DTO,
  Problem_getById_ResBody_DTO,
  Problem_update_ReqParam_DTO,
  Problem_update_ResBody_DTO,
  Problem_update_ReqBody_DTO,
  Problem_getMany_ReqQuery_DTO,
  Problem_getMany_ResBody_DTO,
} from './dto';
import { Problem_delete_ReqBody_DTO } from './dto/Problem.delete.ReqBody.dto';

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

  @Get()
  async getMany(
    @Query() args: Problem_getMany_ReqQuery_DTO,
  ): Promise<Problem_getMany_ResBody_DTO> {
    return this.problemsService.getMany(args);
  }

  @Patch('/:id')
  async update(
    @Param() args: Problem_update_ReqParam_DTO,
    @Body() body: Problem_update_ReqBody_DTO,
  ): Promise<Problem_update_ResBody_DTO> {
    return this.problemsService.update({
      ...args,
      ...body,
    });
  }

  @Delete('/:id')
  async delete(
    @Param() args: Problem_delete_ReqParam_DTO,
    @Body() body: Problem_delete_ReqBody_DTO,
  ): Promise<Problem_delete_ResBody_DTO> {
    return this.problemsService.delete(args, body);
  }
}
