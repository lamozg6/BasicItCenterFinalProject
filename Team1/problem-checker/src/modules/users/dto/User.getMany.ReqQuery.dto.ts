import { IUser_getMany_ReqQuery_DTO } from '../../../common/types/user.types';
import { FieldDef } from '../../../utils';
import { EUserGender } from '../../../utils/enums/UserGender.enum';


export class User_getMany_ReqQuery_DTO implements IUser_getMany_ReqQuery_DTO {
  @FieldDef({
    type: Number,
    required: false,
    nullable: false,
    title: 'Get many request\'s limit',
    is_int: true,
    example: 10,
    min: 1,
    default: 10,
  })
  limit!: undefined | number;

  @FieldDef({
    type: Number,
    required: false,
    nullable: false,
    title: 'Get many request\'s offset',
    is_int: true,
    example: 0,
    min: 0,
    default: 0,
  })
  offset!: undefined | number;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'User\'s gender',
    enum: EUserGender,
  })
  gender: undefined | EUserGender;

  @FieldDef({
    type: Date,
    required: false,
    nullable: false,
    title: 'Users born after this date',
  })
  from_birthdate: undefined | Date;
}
