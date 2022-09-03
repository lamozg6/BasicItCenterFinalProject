import { IArgument, INumberArgument, IStringArgument } from '../../../../common/types/problem.types';
import { FieldDef } from '../../../../utils';
import { NumberArgument } from './NumberArgument.dto';
import { StringArgument } from './StringArgument.dto';


export class Argument implements IArgument {
  @FieldDef({
    type: String, // TODO: fix this
    required: true,
    nullable: false,
    title: 'Argument\'s type',
  })
  type!: number | string;

  @FieldDef({
    type: String, // TODO: fix this
    required: true,
    nullable: false,
    title: 'Argument\'s type',
  })
  content: NumberArgument | StringArgument;
}
