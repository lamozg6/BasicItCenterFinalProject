import {
  IProblem_getById_ReqParam_DTO,
  IProblem_getById_ResBody_DTO,
} from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { transform } from './transform';

export async function getById(
  args: IProblem_getById_ReqParam_DTO,
): Promise<IProblem_getById_ResBody_DTO> {
  const [result] = await ProblemEntity.Repository.query(`
    SELECT * FROM problems
    WHERE deleted_at is null AND id = '${args.id}';
    `);

  if (!result) {
    throw new Error(`Problem with id ${args.id}  is not found`);
  }

  return {
    problem: transform(result),
  };
}
