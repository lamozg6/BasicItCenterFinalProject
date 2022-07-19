import { FieldDef } from '../../../utils';
import { IUser_getById_ReqParam_DTO } from '../../../common/types/user.types';


export class User_getById_ReqParam_DTO implements IUser_getById_ReqParam_DTO {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'User\'s id',
  })
  id!: string;
}
