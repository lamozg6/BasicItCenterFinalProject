import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { transform } from './transformer';
import { IProblem_getMany_ResBody, IProblem_getMany_Storage_Args } from '../../../common/types/problem.types';

export async function getMany(args: IProblem_getMany_Storage_Args): Promise<IProblem_getMany_ResBody> {
  const {
    limit,
    offset,
    order_by,
    order_dir,
  } = args;

  let condition = 'deleted_at is null';

  if (order_by !== undefined) {
    condition += ` AND order by = ${order_by}`;
  }
  if (order_dir !== undefined) {
    condition += ` AND order_dir = ${order_dir}`;
  }

  const [{ count }] = (await ProblemEntity.Repository.query(`
     SELECT COUNT(*)
     FROM problems
     WHERE ${condition}
   `));

  const result = await ProblemEntity.Repository.query(`
     SELECT * 
     FROM problems 
     WHERE ${condition}
     LIMIT ${limit}
     OFFSET ${offset}
   `);

  return {
    problems: result.map((problemEntity => transform(problemEntity))),
    count,
  };
}
