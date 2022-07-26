import { IProblem_getMany_ResBody_DTO, IProblem_getMany_Storage_Args } from '../../../common/types/problem.types';
import { ProblemEntity } from '../../db/entities/Problem.entity';
import { transform } from './transformer';

export async function getMany(args: IProblem_getMany_Storage_Args): Promise<IProblem_getMany_ResBody_DTO> {
  const {
    limit,
    offset,
  } = args;

  const condition = 'deleted_at is null';

  const [{ count }] = await ProblemEntity.Repository.query(`
  SELECT COUNT (*)
  from problems 
  WHERE ${condition};
  `);

  const result = await ProblemEntity.Repository.query(`
  SELECT *
  from problems
  WHERE ${condition}
  LIMIT ${limit}
  OFFSET ${offset};
  `);

  return {
    problems: result.map((problemEntity) => transform(problemEntity)),
    count,
  };
}
