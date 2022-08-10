import {
  IProblemData,
  IProblem_create_Storage_Args,
} from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { generateDateInsertPSQLCommand } from 'src/utils/helpers/dateUtils';
import { transform } from './transform';
import { authtorizePermissions } from 'src/utils/helpers/authtorizePermissions';

export async function create(
  args: IProblem_create_Storage_Args,
): Promise<IProblemData> {
  const { id, name, description, function_name, user_id } = args;
  const [user] = await ProblemEntity.Repository.query(`
  SELECT role from users
  WHERE id = '${args.user_id}'
  `);

  if (!user) {
    throw new Error(`user with id ${args.user_id} is not found`);
  }

  authtorizePermissions(user.role);

  await ProblemEntity.Repository.query(`
  INSERT INTO problems(id, name, description, function_name, user_id, created_at,
                      updated_at, deleted_at)
  VALUES ('${id}', '${name}', '${description}', '${function_name}', '${user_id}',
   ${generateDateInsertPSQLCommand(new Date())},
   ${generateDateInsertPSQLCommand(new Date())}, null);`);

  const result = await ProblemEntity.Repository.query(`
  SELECT * FROM problems
  WHERE id = '${id}';`);

  return {
    problem: transform(result),
  };
}
