import { IProblem_create_Storage_Args, IProblemData } from '../../../common/types/problem.types';
import { ProblemEntity } from '../../db/entities/Problem.entity';
import { transform } from './transformer';
import { generateDateInsertPSQLCommand } from '../../../utils';

export async function create(args: IProblem_create_Storage_Args): Promise<IProblemData> {
  const {
    id,
    name,
    description,
    function_name,
  } = args;


  await ProblemEntity.Repository.query(`
INSERT INTO problems(id, created_at, updated_at, deleted_at, name, description, function_name)
    VALUES('${id}', ${generateDateInsertPSQLCommand(new Date())}, ${generateDateInsertPSQLCommand(new Date())}, 
    null, '${name}', '${description}', '${function_name}');
    `);


  const [result] = await ProblemEntity.Repository.query(`
      SELECT *
      FROM problems
      WHERE id = '${id}';
  `);

  return {
    problem: transform(result),
  };
}
