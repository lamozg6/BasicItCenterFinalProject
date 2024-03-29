import { IProblem_ResBody, IProblem_update_Service_Args } from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { getById } from '../problems';

export async function update(args: IProblem_update_Service_Args): Promise<IProblem_ResBody> {
  let values_to_set = '';

  for (const [key, value] of Object.entries(args)) {
    if (key !== 'id') {
      values_to_set += `${key} = ${value},`;
    }
  }

  if (!values_to_set.length) {
    throw new Error('Nothing to update in request body');
  }

  values_to_set = values_to_set.slice(0, -1);

  await ProblemEntity.Repository.query(`
        UPDATE problems
        SET ${values_to_set}
        WHERE deleted_at is null AND id = '${args.id}';
  `);

  return getById(args);
}
