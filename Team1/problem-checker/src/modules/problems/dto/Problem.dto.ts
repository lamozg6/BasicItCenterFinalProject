import { FieldDef } from 'src/utils';
import { IArgument, IProblem } from '../../../common/types/problem.types';
import { Argument } from './arguments/Argument.dto';

export class Problem_DTO implements IProblem {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'Problem\'s  id',
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
    title: 'Problem\'s descripiton',
  })
  description!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: true,
    title: 'Problem\'s solution',
  })
  solution!: null | string;

  @FieldDef({
    type: Argument,
    required: true,
    nullable: false,
    is_array: true,
    title: 'Problem\'s arguments',
  })
  arguments!: Array<Argument>;
}
