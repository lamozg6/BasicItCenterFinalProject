import { IProblem_update_ReqBody_DTO } from '../../../common/types/problem.types';
import { FieldDef } from '../../../utils';

export class Problem_update_ReqBody_DTO implements IProblem_update_ReqBody_DTO {
    @FieldDef({
      type: String,
      required: false,
      nullable: false,
      title: 'Problem\'s name',
    })
    name!: undefined | string;

    @FieldDef({
      type: String,
      required: false,
      nullable: false,
      title: 'Problem\'s description',
    })
    description!: undefined | string;

    @FieldDef({
      type: String,
      required: false,
      nullable: false,
      title: 'Problem\'s function_name',
    })
    function_name!: undefined | string;
}
