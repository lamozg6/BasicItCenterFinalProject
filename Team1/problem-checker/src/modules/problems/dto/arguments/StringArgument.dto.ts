import { IStringArgument } from '../../../../common/types/problem.types';
import { BaseArgument } from './BaseArgument.dto';
import { FieldDef } from '../../../../utils';


export class StringArgument
  extends BaseArgument
  implements IStringArgument {
  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'String argument\'s minimum length',
  })
  min_length!: number;

  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'String argument\'s maximum length',
  })
  max_length!: number;
}
