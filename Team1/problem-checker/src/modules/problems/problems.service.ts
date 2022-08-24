import { Injectable } from '@nestjs/common';
import { IProblem_create_ReqBody, IProblem_create_ResBody, } from 'src/common/types/problem.types';
import { StorageApi } from 'src/storage';
import { CryptoUtils } from 'src/utils';
import { Problem_getById_ReqParam_DTO } from './dto/Problem_getById_ReqParam.dto';
import { Problem_getById_ResBody_DTO } from './dto/Problem_getById_ResBody.dto';
import { Problem_getMany_ReqQuery_DTO, } from './dto';
import { Problem_getMany_ResBody_DTO } from './dto/Problem.getMany.ResBody.dto';
import { IProblem_update_Service_Args } from 'src/common/types/problem.types';
import { LIMIT, OFFSET } from 'src/constants';
import { Problem_update_ResBody_DTO } from './dto/Problem.update.ResBody.dto';
import { Problem_delete_ReqParam_DTO } from './Problem.delete.ReqParam.dto';
import { Problem_delete_ResBody_DTO } from './Problem.delete.ResBody.dto';

@Injectable()
export class ProblemsService {

     async createProblem(args:IProblem_create_ReqBody):Promise<IProblem_create_ResBody>{
        const id = CryptoUtils.generateUUID();
          return StorageApi.Problems.create({
      id,
      ...args,
    });
     }

    async getById(args:Problem_getById_ReqParam_DTO):Promise<Problem_getById_ResBody_DTO>{
       return StorageApi.Problems.getById(args)
    }
    async getMany(args:Problem_getMany_ReqQuery_DTO):Promise<Problem_getMany_ResBody_DTO>{
        return StorageApi.Problems.getMany({
         ...args,
         limit:args.limit?? LIMIT,
         offset:args.offset?? OFFSET,
        })
    }

    async update(args:IProblem_update_Service_Args):Promise<Problem_update_ResBody_DTO>{
         return StorageApi.Problems.update(args)
    }
    async delete(args:Problem_delete_ReqParam_DTO):Promise<Problem_delete_ResBody_DTO>{
        return StorageApi.Problems.deleteById(args)
    }
}
