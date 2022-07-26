import { IProblem } from '../../../common/types/problem.types';
import { FieldDef } from '../../../utils';

export class Problem_DTO implements IProblem {
    @FieldDef({
      type: String,
      required: true,
      nullable: false,
      is_uuid: true,
      title: 'Problem\'s id',
    })
    id!: string;

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
