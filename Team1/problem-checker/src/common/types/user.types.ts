import { EUserGender } from '../../utils/enums/UserGender.enum';
import { IReqParam_DTO } from './ReqParam.dto';


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

// controller types
export interface IUser_ResBody_DTO extends IUserData {}

export interface IUser_create_ReqBody_DTO extends Omit<IUser, 'id'> {}

export interface IUser_create_ResBody_DTO extends IUser_ResBody_DTO {}

export interface IUser_getById_ReqParam_DTO extends IReqParam_DTO {}

export interface IUser_getById_ResBody_DTO extends IUser_ResBody_DTO {}

// service types
export interface IUser_create_Args extends IUser {}

export interface IUser_create_Result extends IUser_ResBody_DTO {}
