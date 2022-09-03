import { ITest_getMany_ReqQuery_DTO } from '../../../common/types/test.types';
import { ETestType, FieldDef } from '../../../utils';


export class Test_getMany_ReqQuery_DTO implements ITest_getMany_ReqQuery_DTO {
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

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Test\'s related problem id',
  })
  problem_id: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    enum: ETestType,
    title: 'Tests type',
  })
  type: undefined | ETestType;
}
