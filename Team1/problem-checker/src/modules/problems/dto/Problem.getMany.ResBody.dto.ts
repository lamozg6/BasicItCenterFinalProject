import { IProblem_getMany_ResBody_DTO } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';
import { Problem_DTO } from './Problem.dto';

export class Problem_getMany_ResBody_DTO
  implements IProblem_getMany_ResBody_DTO
{
  @FieldDef({
    type: Problem_DTO,
    required: true,
    nullable: false,
    is_array: true,
    title: 'Problems',
  })
  problems: Array<Problem_DTO>;

  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'Problems count',
  })
  count: number;
}
