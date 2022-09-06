import { FieldDef } from 'src/utils';
import { Problem_DTO } from './Problem.dto';

export class Problem_ResBody_DTO {
  @FieldDef({
    type: Problem_DTO,
    required: true,
    nullable: false,
    title: 'Problem\'s data',
  })
  problem!: Problem_DTO;
}
