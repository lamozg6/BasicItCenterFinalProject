import { IProblem_create_Storage_Args, IProblem_ResBody } from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { transform } from './transformer';
import { generateDateInsertPSQLCommand } from '../../../utils/helpers/dateUtils';


export async function create(args: IProblem_create_Storage_Args): Promise<IProblem_ResBody> {
  const {
    id,
    name,
    description,
    solution,
    // arguments,
  } = args;

  await ProblemEntity.Repository.query(
    `INSERT INTO problems (id, created_at, updated_at, deleted_at, name, description, solution, arguments) 
          VALUES ('${id}', ${generateDateInsertPSQLCommand(new Date())}, ${generateDateInsertPSQLCommand(new Date())}, null, ${generateDateInsertPSQLCommand(new Date())},
                  '${name}', '${description}', '${solution}', '${arguments}') ;
          `,
  );

  const [result] = await ProblemEntity.Repository.query(`
          Select * 
          FROM problems
          WHERE id = '${id}';
          `);

  return {
    problem: transform(result),
  };
}
