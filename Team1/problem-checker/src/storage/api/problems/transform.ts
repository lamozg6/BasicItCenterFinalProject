import { IProblem } from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';

export function transform(entity: ProblemEntity): IProblem {
  return {
    id: entity[0].id,
    name: entity[0].name,
    description: entity[0].description,
    function_name: entity[0].function_name,
    user_id: entity[0].user_id,
  };
}
