import { Test_DTO } from './Test.dto';
import { FieldDef } from '../../../utils';
import { ITest_ResBody_DTO } from '../../../common/types/test.types';


export class Test_ResBody_DTO implements ITest_ResBody_DTO {
  @FieldDef({
    type: Test_DTO,
    required: true,
    nullable: false,
    title: 'Test\'s data',
  })
  test: Test_DTO;
}
