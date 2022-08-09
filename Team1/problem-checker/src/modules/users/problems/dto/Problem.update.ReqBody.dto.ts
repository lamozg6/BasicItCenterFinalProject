import { FieldDef } from 'src/utils';
import { IProblem_update_ReqBody_DTO } from '../../../../common/types/problem.types';

export class Problem_update_ReqBody_DTO implements IProblem_update_ReqBody_DTO {
  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Problem name',
  })
  name: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Problem description',
  })
  description: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'function name',
  })
  function_name: undefined | string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'user_id',
  })
  user_id?: string;
}
