import { IProblem_create_ReqBody_DTO } from '../../../common/types/problem.types';
import { FieldDef } from '../../../utils';

export class Problem_create_ReqBody_DTO implements IProblem_create_ReqBody_DTO {
    @FieldDef({
      type: String,
      required: true,
      nullable: false,
      title: 'Problem\'s name',
    })
    name!: string;

    @FieldDef({
      type: String,
      required: true,
      nullable: false,
      title: 'Problem\'s description',
    })
    description!: string;

    @FieldDef({
      type: String,
      required: true,
      nullable: false,
      title: 'Problem\'s function_name',
    })
    function_name!: string;
}
