import { IProblem_getMany_Stotage_Args } from 'src/common/types/problem.types';
import { Problem_getMany_ResBody_DTO } from 'src/modules/problems/dto';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { transform } from './transform';

export async function getMany(
  args: IProblem_getMany_Stotage_Args,
): Promise<Problem_getMany_ResBody_DTO> {
  const { limit, offset, name, function_name } = args;

  let conditions = '';

  if (name !== undefined) {
    conditions += `name = '${name}'`;
  }

  if (function_name !== undefined) {
    conditions += ` AND function_name = '${function_name}'`;
  }

  if (!conditions.length) {
    conditions = 'TRUE';
  }

  const count = await ProblemEntity.Repository.query(`
  SELECT COUNT(*)
  FROM problems
  WHERE ${conditions}
  `);

  const result = await ProblemEntity.Repository.query(`
  SELECT * 
  FROM problems
  WHERE ${conditions}
  LIMIT ${limit}
  OFFSET ${offset}
  `);

  if (!result.length) {
    throw new Error('Problems at your request are not found');
  }

  return {
    problems: result.map((problemEntity) => transform(problemEntity)),
    count,
  };
}
