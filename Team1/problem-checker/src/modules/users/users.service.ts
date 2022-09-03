import { Injectable } from '@nestjs/common';
import {
  IUser_create_ReqBody_DTO, IUser_ResBody_DTO,
  IUser_update_Service_Args,
} from '../../common/types/user.types';
import { StorageApi } from '../../storage';
import { CryptoUtils } from '../../utils';
import {
  User_getById_ReqParam_DTO,
  User_getById_ResBody_DTO,
  User_delete_ReqParam_DTO,
  User_delete_ResBody_DTO,
  User_getMany_ReqQuery_DTO,
  User_getMany_ResBody_DTO,
  User_update_ResBody_DTO,
} from './dto';
import { LIMIT, OFFSET } from '../../constants';
import { IDelete_ResBody_DTO } from '../../common/types/Delete.ResBody.dto';
import { ReqParam_DTO } from '../../common/types/ReqParam.dto';


@Injectable()
export class UsersService {
  async create(args: IUser_create_ReqBody_DTO): Promise<IUser_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return StorageApi.Users.create({
      id,
      ...args,
    });
  }

  async getById(args: ReqParam_DTO): Promise<IUser_ResBody_DTO> {
    return StorageApi.Users.getById(args);
  }

  async getMany(args: User_getMany_ReqQuery_DTO): Promise<User_getMany_ResBody_DTO> {
    return StorageApi.Users.getMany({
      ...args,
      limit: args.limit ?? LIMIT,
      offset: args.offset ?? OFFSET,
    });
  }

  async update(args: IUser_update_Service_Args): Promise<IUser_ResBody_DTO> {
    return StorageApi.Users.update(args);
  }

  async delete(args: ReqParam_DTO): Promise<IDelete_ResBody_DTO> {
    return StorageApi.Users.deleteById(args);
  }
}
