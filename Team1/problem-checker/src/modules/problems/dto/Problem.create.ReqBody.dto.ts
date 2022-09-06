import { IArgument, IProblem_create_ReqBody } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';
import { Argument } from './arguments';

export class Problem_create_ReqBody_DTO implements IProblem_create_ReqBody {
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
    nullable: true,
    title: 'Problem\'s solution',
  })
  solution!: null | string;

  @FieldDef({
    type: Argument,
    required: true,
    nullable: false,
    title: 'Problem\'s arguments',
  })
  arguments!: Array<Argument>;
  tests;
  test_count;
}
