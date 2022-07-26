import {
  IProblem_getById_ReqParam_DTO,
  IProblem_getById_ResBody_DTO } from '../../../common/types/problem.types';
import { ProblemEntity } from '../../db/entities/Problem.entity';
import { transform } from './transformer';

export async function getById(args: IProblem_getById_ReqParam_DTO): Promise<IProblem_getById_ResBody_DTO> {
  const [result] = await ProblemEntity.Repository.query(`
        SELECT * 
        from problems
        WHERE deleted_at is null AND id = '${args.id}';
    `);

  if (!result) {
    throw new Error(`Problem with id ${args.id} is not found`);
  }

  return {
    problem: transform(result),
  };
}
