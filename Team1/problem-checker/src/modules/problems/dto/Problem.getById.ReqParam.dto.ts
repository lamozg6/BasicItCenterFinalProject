import { FieldDef } from '../../../utils';
import { IProblem_getById_ReqParam_DTO } from '../../../common/types/problem.types';

export class Problem_getById_ReqParam_DTO implements IProblem_getById_ReqParam_DTO {
    @FieldDef({
      type: String,
      required: true,
      nullable: false,
      is_uuid: true,
      title: 'Problem\'s id',
    })
    id!: string;
}
