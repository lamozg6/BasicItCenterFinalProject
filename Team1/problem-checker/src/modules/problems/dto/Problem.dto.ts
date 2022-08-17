import { IProblem } from 'src/common/types/problem.types';
import { FieldDef } from '../../../utils';

export class Problem_DTO implements IProblem {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'Problem id',
  })
  id: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'Problem name',
  })
  name: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'Problem description',
  })
  description: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'function name',
  })
  function_name: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'user_id',
  })
  user_id: string;
}
