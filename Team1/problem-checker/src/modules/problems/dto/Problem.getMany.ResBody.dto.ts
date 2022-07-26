import { IProblem_getMany_ResBody_DTO } from '../../../common/types/problem.types';
import { Problem_DTO } from './Problem.dto';
import { FieldDef } from '../../../utils';


export class Problem_getMany_ResBody_DTO implements IProblem_getMany_ResBody_DTO {
    @FieldDef({
      type: Problem_DTO,
      required: true,
      nullable: false,
      title: 'Problems data',
      is_array: true,
    })
    problems!: Array<Problem_DTO>;

    @FieldDef({
      type: Number,
      required: true,
      nullable: false,
      title: 'Overall count to problems with given filters',
    })
    count!: number;
}
