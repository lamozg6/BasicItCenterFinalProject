import { User_DTO } from './User.dto';
import { FieldDef } from '../../../utils';
import { IUser_ResBody } from '../../../common/types/user.types';


export class User_ResBody_DTO implements IUser_ResBody {
  @FieldDef({
    type: User_DTO,
    required: true,
    nullable: false,
    title: 'User\'s data',
  })
  user: User_DTO;
}
