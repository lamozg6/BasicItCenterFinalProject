import { IUser_create_ReqBody_DTO } from '../../../common/types/user.types';
import { FieldDef } from '../../../utils';
import { EUserGender } from '../../../utils/enums/UserGender.enum';


export class User_create_ReqBody_DTO implements IUser_create_ReqBody_DTO {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'User\'s name',
  })
  name!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'User\'s surname',
  })
  surname!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: 'User\'s username',
  })
  username!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_email: true,
    title: 'User\'s email',
  })
  email!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    enum: EUserGender,
    title: 'User\'s gender',
  })
  gender!: EUserGender;

  @FieldDef({
    type: Date,
    required: true,
    nullable: false,
    title: 'User\'s date',
  })
  birthdate!: Date;
}
