import { IUser } from '../../../common/types/user.types';
import { ERole, FieldDef } from '../../../utils';
import { EUserGender } from '../../../utils/enums/UserGender.enum';

export class User_DTO implements IUser {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: "User's id",
  })
  id!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: "User's name",
  })
  name!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: "User's surname",
  })
  surname!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    title: "User's username",
  })
  username!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_email: true,
    title: "User's email",
  })
  email!: string;

  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    enum: EUserGender,
    title: "User's gender",
  })
  gender!: EUserGender;

  @FieldDef({
    type: Date,
    required: true,
    nullable: false,
    title: "User's date",
  })
  birthdate!: Date;

  @FieldDef({
    type: String,
    required: true,
    default: 'user',
    nullable: false,
    title: 'Role',
  })
  role: ERole;
}
