import { IProblem_delete_ReqParam_DTO } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';

export class Problem_delete_ReqParam_DTO
  implements IProblem_delete_ReqParam_DTO
{
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'Problem id',
  })
  id: string;
}
