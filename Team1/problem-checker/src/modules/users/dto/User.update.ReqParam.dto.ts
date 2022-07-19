import { IUser_update_ReqParam_DTO } from '../../../common/types/user.types';
import { FieldDef } from '../../../utils';


export class User_update_ReqParam_DTO implements IUser_update_ReqParam_DTO {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'User\'s id',
  })
  id!: string;
}
