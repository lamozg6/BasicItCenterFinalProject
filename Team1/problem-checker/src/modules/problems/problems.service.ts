import { Injectable } from '@nestjs/common';
import {
  Problem_create_ReqBody_DTO,
  Problem_create_ResBody_DTO, Problem_delete_ReqParam_DTO, Problem_delete_ResBody_DTO,
  Problem_getById_ReqParam_DTO,
  Problem_getById_ResBody_DTO,
  Problem_getMany_ReqQuery_DTO,
  Problem_getMany_ResBody_DTO, Problem_update_ResBody_DTO,
} from './dto';
import { StorageApi } from 'src/storage';
import { CryptoUtils } from 'src/utils';
import { LIMIT, OFFSET } from 'src/constants';
import { IProblem_update_Service_Args } from '../../common/types/problem.types';

@Injectable()
export class ProblemsService {
  async create(args: Problem_create_ReqBody_DTO):Promise<Problem_create_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return StorageApi.Problems.create({
      id,
      ...args,
    });
  }

  async getById(args: Problem_getById_ReqParam_DTO): Promise<Problem_getById_ResBody_DTO> {
    return StorageApi.Problems.getById(args);
  }
  async getMany(args: Problem_getMany_ReqQuery_DTO): Promise<Problem_getMany_ResBody_DTO> {
    return StorageApi.Problems.getMany({
      ...args,
      limit: args.limit ?? LIMIT,
      offset: args.offset ?? OFFSET,
    });
  }

  async update(args: IProblem_update_Service_Args): Promise<Problem_update_ResBody_DTO> {
    return StorageApi.Problems.update(args);
  }

  async delete(args: Problem_delete_ReqParam_DTO): Promise<Problem_delete_ResBody_DTO> {
    return StorageApi.Problems.deleteById(args);
  }
}
