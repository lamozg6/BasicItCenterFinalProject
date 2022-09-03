import { ITest } from '../../../common/types/test.types';
import { ETestType, FieldDef } from '../../../utils';


export class Test_DTO implements ITest {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'Test\'s id',
  })
  id!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'Test\'s related problem id',
  })
  problem_id!: string;

  input!: Array<any>;

  output!: any;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    enum: ETestType,
    title: 'Test\'s type',
  })
  type!: ETestType;
}
