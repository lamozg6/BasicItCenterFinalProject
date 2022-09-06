import { EUserGender } from '../../utils/enums/UserGender.enum';
import { ReqParam_DTO } from './ReqParam.dto';
import { IReqQuery } from './ReqQuery.dto';


export interface IUser {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  gender: EUserGender;
  birthdate: Date;
}

// common types
export interface IUser_ResBody {
  user: IUser;
}

export interface IUser_getMany_ResBody {
  users: Array<IUser>;
  count: number;
}

export interface IUser_getMany_ReqQuery extends IReqQuery {
  gender?: EUserGender;
  from_birthdate?: Date;
}

export interface IUser_update_ReqBody extends Partial<IUser_create_ReqBody> {}

// controller types
export interface IUser_create_ReqBody extends Omit<IUser, 'id'> {}

// storage types
export interface IUser_create_Storage_Args extends IUser {}

export interface IUser_getMany_Storage_Args
  extends IUser_getMany_ReqQuery {
  limit: number;
  offset: number;
}

// service types
export interface IUser_update_Service_Args
  extends ReqParam_DTO, IUser_update_ReqBody {}
