import {
  IProblem_delete_ReqParam_DTO,
  IProblem_delete_ResBody_DTO,
} from 'src/common/types/problem.types';
import { Problem_delete_ReqBody_DTO } from 'src/modules/problems/dto/Problem.delete.ReqBody.dto';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { authtorizePermissions } from 'src/utils/helpers/authtorizePermissions';
import { generateDateInsertPSQLCommand } from 'src/utils/helpers/dateUtils';

export async function deleteById(
  args: IProblem_delete_ReqParam_DTO,
  body: Problem_delete_ReqBody_DTO,
): Promise<IProblem_delete_ResBody_DTO> {
  const [user] = await ProblemEntity.Repository.query(`
  SELECT role from users
  WHERE id = '${body.user_id}'
  `);

  if (!user) {
    throw new Error(`User with id ${body.user_id} is not found`);
  }

  authtorizePermissions(user.role);

  const [problem] = await ProblemEntity.Repository.query(`
    SELECT * from problems
    WHERE deleted_at is null AND id = '${args.id}';
  `);

  if (!problem) {
    throw new Error(`Problem with id ${args.id} is not found`);
  }

  await ProblemEntity.Repository.query(`
  UPDATE problems
  set deleted_at = ${generateDateInsertPSQLCommand(new Date())}
  WHERE id = '${args.id}'`);

  return {};
}
