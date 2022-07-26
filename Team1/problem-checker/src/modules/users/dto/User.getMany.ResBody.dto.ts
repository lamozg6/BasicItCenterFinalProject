import { IUser_getMany_ResBody_DTO } from '../../../common/types/user.types';
import { User_DTO } from './User.dto';
import { FieldDef } from '../../../utils';

export class User_getMany_ResBody_DTO implements IUser_getMany_ResBody_DTO {
    @FieldDef({
      type: User_DTO,
      required: true,
      nullable: false,
      title: 'Users data',
      is_array: true,
    })
    users!: Array<User_DTO>;

    @FieldDef({
      type: Number,
      required: true,
      nullable: false,
      title: 'Overall count to users with given filters',
    })
    count!: number;
}
