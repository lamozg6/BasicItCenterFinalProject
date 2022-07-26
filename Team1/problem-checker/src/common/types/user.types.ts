import { EUserGender } from '../../utils/enums/UserGender.enum';
import { IReqParam_DTO } from './ReqParam.dto';
import { IReqQuery_DTO } from './ReqQuery.dto';
import { IStorage_GetMany_ReqQuery } from './Storage.GetMany.ReqQuery';

export interface IUser {
  id: string;
  name: string;
  surname: string;
  username: string;
  email: string;
  gender: EUserGender;
  birthdate: Date;
}

export interface IUserData {
  user: IUser;
}

// common types
export interface IUser_ResBody_DTO extends IUserData {}

export interface IUser_create_ResBody_DTO extends IUser_ResBody_DTO {}

export interface IUser_getById_ReqParam_DTO extends IReqParam_DTO {}

export interface IUser_getById_ResBody_DTO extends IUser_ResBody_DTO {}

export interface IUser_getMany_ReqQuery_DTO extends IReqQuery_DTO{
  gender: undefined | EUserGender;
  from_birthdate: undefined | Date;
}

export interface IUser_getMany_ResBody_DTO {
  users: Array<IUser>;
  count: number;
}

export interface IUser_update_ReqParam_DTO extends IReqParam_DTO {}

export interface IUser_update_ReqBody_DTO extends Partial<IUser_create_ReqBody_DTO> {}

export interface IUser_update_ResBody_DTO extends IUser_ResBody_DTO {}

export interface IUser_delete_ReqParam_DTO extends IReqParam_DTO {}

export interface IUser_delete_ResBody_DTO {}

// controller types
export interface IUser_create_ReqBody_DTO extends Omit<IUser, 'id'> {}

// storage types
export interface IUser_create_Storage_Args extends IUser {}

export interface IUser_getMany_Storage_Args extends
    IUser_getMany_ReqQuery_DTO {
  limit: number;
  offset: number;
}

// service types
export interface IUser_update_Service_Args
  extends IUser_update_ReqParam_DTO, IUser_update_ReqBody_DTO {}
