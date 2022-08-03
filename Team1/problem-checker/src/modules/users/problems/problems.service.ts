import { Injectable } from '@nestjs/common';
import {
  IProblem_create_Args,
  IProblem_create_Result,
} from 'src/common/types/problem.types';
import { StorageApi } from 'src/storage';

@Injectable()
export class ProblemsService {
  async create(args: IProblem_create_Args): Promise<IProblem_create_Result> {
    return StorageApi.Problems.create({ problem: args });
  }
}
