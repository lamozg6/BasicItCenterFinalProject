import { ITest_getMany_ResBody_DTO } from '../../../common/types/test.types';
import { Test_DTO } from './Test.dto';
import { FieldDef } from '../../../utils';


export class Test_getMany_ResBody_DTO implements ITest_getMany_ResBody_DTO {
  @FieldDef({
    type: Test_DTO,
    required: true,
    nullable: false,
    title: 'Tests data',
    is_array: true,
  })
  tests: Array<Test_DTO>;

  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'Overall count of tests with given filters',
  })
  count: number;
}
