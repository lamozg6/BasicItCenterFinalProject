import { IProblem_update_ReqBody, ITest } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';
import { Argument } from './arguments/Argument.dto';

export class Problem_update_ReqBody_DTO implements IProblem_update_ReqBody {
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
    nullable: true,
    title: 'Problem\'s solution',
  })
  solution!: undefined | null | string;

  @FieldDef({
    type: Argument,
    required: false,
    nullable: false,
    is_array: true,
    title: 'Problem\'s arguments',
  })
  arguments!: undefined | Array<Argument>;

  // TODO: uncomment after adding Test DTO
  // @FieldDef({
  //   type: ITest,
  //   required: false,
  //   nullable: false,
  //   is_array: true,
  //   title: 'Problem\'s tests',
  // })
  tests!: undefined | Array<ITest>;

  @FieldDef({
    type: Number,
    required: false,
    nullable: true,
    title: 'Problem\'s test count',
  })
  test_count!: undefined | null | number;
}
