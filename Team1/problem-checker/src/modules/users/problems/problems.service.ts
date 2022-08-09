import { Injectable } from '@nestjs/common';
import {
  IProblem_create_ReqBody_DTO,
  IProblem_create_ResBody_DTO,
  IProblem_update_Service_Args,
} from 'src/common/types/problem.types';
import { LIMIT, OFFSET } from 'src/constants';
import { StorageApi } from 'src/storage';
import { CryptoUtils } from 'src/utils';
import {
  Problem_delete_ReqParam_DTO,
  Problem_delete_ResBody_DTO,
  Problem_getById_ReqParam_DTO,
  Problem_getById_ResBody_DTO,
  Problem_getMany_ReqQuery_DTO,
  Problem_getMany_ResBody_DTO,
  Problem_update_ResBody_DTO,
} from './dto';
import { Problem_delete_ReqBody_DTO } from './dto/Problem.delete.ReqBody.dto';

@Injectable()
export class ProblemsService {
  async create(
    args: IProblem_create_ReqBody_DTO,
  ): Promise<IProblem_create_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return StorageApi.Problems.create({
      id,
      ...args,
    });
  }

  async getById(
    args: Problem_getById_ReqParam_DTO,
  ): Promise<Problem_getById_ResBody_DTO> {
    return StorageApi.Problems.getById(args);
  }

  async getMany(
    args: Problem_getMany_ReqQuery_DTO,
  ): Promise<Problem_getMany_ResBody_DTO> {
    return StorageApi.Problems.getMany({
      ...args,
      limit: args.limit ?? LIMIT,
      offset: args.offset ?? OFFSET,
    });
  }

  async update(
    args: IProblem_update_Service_Args,
  ): Promise<Problem_update_ResBody_DTO> {
    return StorageApi.Problems.update(args);
  }

  async delete(
    args: Problem_delete_ReqParam_DTO,
    body: Problem_delete_ReqBody_DTO,
  ): Promise<Problem_delete_ResBody_DTO> {
    return StorageApi.Problems.deleteById(args, body);
  }
}
