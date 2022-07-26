import { IProblem_ResBody_DTO } from '../../../common/types/problem.types';
import { Problem_DTO } from './Problem.dto';
import { FieldDef } from '../../../utils';

export class Problem_ResBody_DTO implements IProblem_ResBody_DTO {
    @FieldDef({
      type: Problem_DTO,
      required: true,
      nullable: false,
      title: 'Problem\'s data',
    })
    problem: Problem_DTO;
}
