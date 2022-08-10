import { IProblem_update_Service_Args } from 'src/common/types/problem.types';
import { Problem_update_ResBody_DTO } from 'src/modules/users/problems/dto/Problem.update.ResBody.dto';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { authtorizePermissions } from 'src/utils/helpers/authtorizePermissions';
import { getById } from './getById';

export async function update(
  args: IProblem_update_Service_Args,
): Promise<Problem_update_ResBody_DTO> {
  let user_id = '';
  let values_to_set = '';

  for (const [key, value] of Object.entries(args)) {
    if (key !== 'id') {
      if (key !== 'user_id') {
        values_to_set += ` ${key}='${value}',`;
      } else {
        user_id = value;
      }
    }
  }

  const [user] = await ProblemEntity.Repository.query(`
  SELECT role from users
  WHERE id = '${user_id}';
  `);

  if (!user) {
    throw new Error(`User with id ${user_id} is not fuund`);
  }

  authtorizePermissions(user.role);

  if (!values_to_set.length) {
    throw new Error('Nothing to update in request body');
  }

  values_to_set = values_to_set.slice(0, -1);

  await ProblemEntity.Repository.query(`
    UPDATE problems
    SET ${values_to_set}
    WHERE deleted_at is null AND id = '${args.id}'
    `);

  return getById(args);
}
