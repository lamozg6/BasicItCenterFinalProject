import { IProblem_update_Service_Args } from 'src/common/types/problem.types';
import { Problem_update_ResBody_DTO } from 'src/modules/users/problems/dto/Problem.update.ResBody.dto';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { getById } from './getById';

export async function update(
  args: IProblem_update_Service_Args,
): Promise<Problem_update_ResBody_DTO> {
  let values_to_set = '';

  for (const [key, value] of Object.entries(args)) {
    if (key !== 'id') {
      values_to_set += `${key}=${value},`;
    }
  }

  if (!values_to_set.length) {
    throw new Error('Nothing to update in request body');
  }

  values_to_set = values_to_set.slice(0, 1);

  await ProblemEntity.Repository.query(`
    UPDATE problems
    SET ${values_to_set}
    WHERE id = '${args.id}`);

  const result = await ProblemEntity.Repository.query(`
  SELECT * from problems
  WHERE deleted_at is null AND id = '${args.id}"
  `);
  return getById(args);
}
