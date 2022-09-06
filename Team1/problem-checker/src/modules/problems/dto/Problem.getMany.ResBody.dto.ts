import { IProblem_getMany_ResBody } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';
import { Problem_DTO } from './Problem.dto';

export class Problem_getMany_ResBody_DTO implements IProblem_getMany_ResBody {
  @FieldDef({
    type: Problem_DTO,
    required: true,
    nullable: false,
    title: 'Problem\'s data',
    is_array: true,
  })
  problems!: Array<Problem_DTO>;

  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'All count of problems',
  })
  count: number;
}
