import { FieldDef } from '../../../../utils';
import { IBaseArgument } from '../../../../common/types/problem.types';


export class BaseArgument implements IBaseArgument {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'Argument\'s name',
  })
  name!: string;
}
