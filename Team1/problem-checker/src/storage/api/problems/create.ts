import { IProblemData } from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { transform } from './transform';

export async function create(args: IProblemData): Promise<IProblemData> {
  const {
    problem: { id, name, description, function_name },
  } = args;
  await ProblemEntity.Repository.query(`
  INSERT INTO problems(id, name, description, function_name) 
  VALUES ('${id}', '${name}', '${description}', '${function_name}');`);

  const result = await ProblemEntity.Repository.query(`
  SELECT * FROM problems
  WHERE id = '${id}';`);

  return {
    problem: transform(result),
  };
}
