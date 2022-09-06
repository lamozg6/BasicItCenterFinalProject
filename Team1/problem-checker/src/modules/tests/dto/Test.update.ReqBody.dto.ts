import { ITest_update_ReqBody_DTO } from '../../../common/types/test.types';
import { ETestType, FieldDef } from '../../../utils';


export class Test_update_ReqBody_DTO implements ITest_update_ReqBody_DTO {
  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    is_uuid: true,
    title: 'Test\'s related problem id',
  })
  problem_id!: undefined | string;

  input!: undefined | Array<any>;

  output!: undefined | any;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    enum: ETestType,
    title: 'Test\'s type',
  })
  type!: undefined | ETestType;
}
