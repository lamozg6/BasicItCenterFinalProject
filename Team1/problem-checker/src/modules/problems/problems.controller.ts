import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { IProblem } from 'src/common/types/problem.types';
import { Problem_create_ReqBody_DTO,  } from './dto/Problem.create.ReqBody.dto';
import { Problem_create_ResBody_DTO } from './dto/Problem_create_ResBody.dto';
import { Problem_getById_ReqParam_DTO } from './dto/Problem_getById_ReqParam.dto';
import { Problem_getById_ResBody_DTO } from './dto/Problem_getById_ResBody.dto';
import { ProblemsService } from './problems.service';
import { Problem_getMany_ReqQuery_DTO } from './dto';
import { Problem_getMany_ResBody_DTO } from './dto/Problem.getMany.ResBody.dto';
import { Problem_update_ReqBody_DTO } from './dto/Problem.update.ReqBody.dto';
import { Problem_update_ReqParam_DTO } from './dto/Problem.update.ReqParam.dto';
import { Problem_update_ResBody_DTO } from './dto/Problem.update.ResBody.dto';  
import { Problem_delete_ReqParam_DTO } from './Problem.delete.ReqParam.dto';
import { Problem_delete_ResBody_DTO } from './Problem.delete.ResBody.dto';

@Controller('problems')
export class ProblemsController {
    constructor( private readonly problemsService: ProblemsService){
    }


    @Post()
     async createProblem(@Body()args:Problem_create_ReqBody_DTO):Promise<Problem_create_ResBody_DTO> {
        return this.problemsService.createProblem(args);
}

@Get('/:id')
  async getById(@Param() args: Problem_getById_ReqParam_DTO): Promise<Problem_getById_ResBody_DTO> {
    return this.problemsService.getById(args);
  }

  @Get()
  async getMany(@Query() args: Problem_getMany_ReqQuery_DTO): Promise<Problem_getMany_ResBody_DTO> {
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
  async delete(@Param() args: Problem_delete_ReqParam_DTO): Promise<Problem_delete_ResBody_DTO> {
    return this.problemsService.delete(args);
  }



}
