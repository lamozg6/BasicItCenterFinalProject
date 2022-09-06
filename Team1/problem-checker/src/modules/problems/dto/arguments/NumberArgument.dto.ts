import { IBaseArgument, INumberArgument } from '../../../../common/types/problem.types';
import { BaseArgument } from './BaseArgument.dto';
import { FieldDef } from '../../../../utils';


export class NumberArgument
  extends BaseArgument
  implements INumberArgument {
  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'Number argument\'s minimum value',
  })
  min!: number;

  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'Number argument\'s maximum value',
  })
  max!: number;
}
