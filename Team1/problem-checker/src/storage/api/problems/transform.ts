import { IProblem } from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';

export function transform(entity: ProblemEntity): IProblem {
  return {
    id: entity.id,
    name: entity.name,
    description: entity.description,
    function_name: entity.function_name,
  };
}
