import { IUser_login_ReqBody_DTO } from 'src/common/types/user.types';
import { FieldDef } from 'src/utils';

export class User_login_ReqBody_DTO implements IUser_login_ReqBody_DTO {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'User/s email',
  })
  email: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'User/s password',
  })
  password: string;
}
