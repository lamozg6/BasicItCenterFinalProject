import { IUser_getMany_ResBody } from '../../../common/types/user.types';
import { User_DTO } from './User.dto';
import { FieldDef } from '../../../utils';


export class User_getMany_ResBody_DTO implements IUser_getMany_ResBody {
  @FieldDef({
    type: User_DTO,
    required: true,
    nullable: false,
    title: 'Users data',
    is_array: true,
  })
  users: Array<User_DTO>;

  @FieldDef({
    type: Number,
    required: true,
    nullable: false,
    title: 'Overall count of users with given filters',
  })
  count: number;
}
