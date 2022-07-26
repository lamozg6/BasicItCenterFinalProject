import { ProblemEntity } from '../../db/entities/Problem.entity';
import { IProblem } from '../../../common/types/problem.types';

export function transform(entity: ProblemEntity): IProblem {
  return {
    id: entity.id,
    name: entity.name,
    description: entity.description,
    function_name: entity.function_name,

  };
}
