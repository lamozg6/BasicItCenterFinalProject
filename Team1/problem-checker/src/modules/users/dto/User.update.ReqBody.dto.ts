import { IUser_update_ReqBody_DTO } from '../../../common/types/user.types';
import { FieldDef } from '../../../utils';
import { EUserGender } from '../../../utils/enums/UserGender.enum';


export class User_update_ReqBody_DTO implements IUser_update_ReqBody_DTO {
  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'User\'s name',
  })
  name!: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'User\'s surname',
  })
  surname!: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'User\'s username',
  })
  username!: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    is_email: true,
    title: 'User\'s email',
  })
  email!: undefined | string;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    enum: EUserGender,
    title: 'User\'s gender',
  })
  gender!: undefined | EUserGender;

  @FieldDef({
    type: Date,
    required: false,
    nullable: false,
    title: 'User\'s date',
  })
  birthdate!: undefined | Date;
}
