import { Injectable } from '@nestjs/common';
import {
  IProblem_create_ReqBody_DTO,
  IProblem_delete_ReqParam_DTO,
  IProblem_delete_ResBody_DTO,
  IProblem_getById_ReqParam_DTO,
  IProblem_getById_ResBody_DTO,
  IProblem_getMany_ReqQuery_DTO, IProblem_getMany_ResBody_DTO,
  IProblem_ResBody_DTO,
  IProblem_update_ResBody_DTO,
  IProblem_update_Service_Args,
} from '../../common/types/problem.types';
import { CryptoUtils } from '../../utils';
import { StorageApi } from '../../storage';
import { LIMIT, OFFSET } from '../../constants';

@Injectable()
export class ProblemsService {
  async create(args: IProblem_create_ReqBody_DTO): Promise<IProblem_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return StorageApi.Problems.create({
      id,
      ...args,
    });
  }

  async getMany(args: IProblem_getMany_ReqQuery_DTO): Promise<IProblem_getMany_ResBody_DTO> {
    return StorageApi.Problems.getMany({
      ...args,
      limit: args.limit ?? LIMIT,
      offset: args.offset ?? OFFSET,
    });
  }

  async getById(args: IProblem_getById_ReqParam_DTO): Promise<IProblem_getById_ResBody_DTO> {
    return StorageApi.Problems.getById(args);
  }

  async update(args: IProblem_update_Service_Args): Promise<IProblem_update_ResBody_DTO> {
    return StorageApi.Problems.update(args);
  }

  async delete(args: IProblem_delete_ReqParam_DTO): Promise<IProblem_delete_ResBody_DTO> {
    return StorageApi.Problems.deleteById(args);
  }
}
