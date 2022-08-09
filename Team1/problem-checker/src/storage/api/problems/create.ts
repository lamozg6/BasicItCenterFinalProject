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
  const [{ role }] = await ProblemEntity.Repository.query(`
  SELECT role from users
  WHERE id = '${args.user_id}'
  `);

  authtorizePermissions(role);

  await ProblemEntity.Repository.query(`
  INSERT INTO problems(id, created_at, updated_at, deleted_at, name, description, function_name, user_id) 
  VALUES ('${id}', ${generateDateInsertPSQLCommand(new Date())},
   ${generateDateInsertPSQLCommand(new Date())}, null, '${name}', 
   '${description}', '${function_name}', '${user_id}');`);

  const result = await ProblemEntity.Repository.query(`
  SELECT * FROM problems
  WHERE id = '${id}';`);

  return {
    problem: transform(result),
  };
}
