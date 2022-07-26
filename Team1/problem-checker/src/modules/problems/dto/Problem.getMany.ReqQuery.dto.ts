import { FieldDef } from '../../../utils';
import { IProblem_getMany_ReqQuery_DTO } from '../../../common/types/problem.types';

export class Problem_getMany_ReqQuery_DTO implements IProblem_getMany_ReqQuery_DTO {
    @FieldDef({
      type: Number,
      required: false,
      nullable: false,
      title: 'Get many request\'s limit',
      is_int: true,
      example: 10,
      min: 1,
      default: 10,
    })
    limit!: undefined | number;

    @FieldDef({
      type: Number,
      required: false,
      nullable: false,
      title: 'Get many request\'s offset',
      is_int: true,
      example: 0,
      min: 0,
      default: 0,
    })
    offset!: undefined | number;
}
