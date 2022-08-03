import { IProblem_ResBody_DTO } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';
import { Problem_DTO } from './Problem.dto';

export class Problem_ResBody_DTO implements IProblem_ResBody_DTO {
  @FieldDef({
    type: Problem_DTO,
    required: true,
    nullable: false,
    title: 'Problem data',
  })
  problem: Problem_DTO;
}
