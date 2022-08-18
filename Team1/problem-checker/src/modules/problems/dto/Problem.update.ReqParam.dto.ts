import { FieldDef } from 'src/utils';
import { IProblem_update_ReqParam_DTO } from '../../../common/types/problem.types';

export class Problem_update_ReqParam_DTO
  implements IProblem_update_ReqParam_DTO
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
