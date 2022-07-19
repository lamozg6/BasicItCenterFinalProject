import { Injectable } from '@nestjs/common';
import {
  IUser_create_ReqBody_DTO,
  IUser_create_ResBody_DTO,
} from '../../common/types/user.types';
import { StorageApi } from '../../storage';
import { CryptoUtils } from '../../utils';
import {
  User_getById_ReqParam_DTO,
  User_getById_ResBody_DTO,
  User_delete_ReqParam_DTO,
  User_delete_ResBody_DTO,
} from './dto';


@Injectable()
export class UsersService {
  async create(args: IUser_create_ReqBody_DTO): Promise<IUser_create_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return StorageApi.Users.create({
      id,
      ...args,
    });
  }

  async getById(args: User_getById_ReqParam_DTO): Promise<User_getById_ResBody_DTO> {
    return StorageApi.Users.getById(args);
  }

  async delete(args: User_delete_ReqParam_DTO): Promise<User_delete_ResBody_DTO> {
    return StorageApi.Users.deleteById(args);
  }
}
