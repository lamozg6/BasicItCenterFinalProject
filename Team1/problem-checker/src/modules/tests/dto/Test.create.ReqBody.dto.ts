import { ITest_create_ReqBody_DTO } from '../../../common/types/test.types';
import { ETestType, FieldDef } from '../../../utils';

export class Test_create_ReqBody_DTO implements ITest_create_ReqBody_DTO {
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
