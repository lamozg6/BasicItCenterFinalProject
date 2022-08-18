import { IProblem_create_ReqBody_DTO } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';

export class Problem_create_ReqBody_DTO implements IProblem_create_ReqBody_DTO {
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
