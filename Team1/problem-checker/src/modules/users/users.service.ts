import { Injectable } from '@nestjs/common';
import { IUser_create_Args, IUser_create_ReqBody_DTO, IUser_create_Result } from '../../common/types/user.types';
import { StorageApi } from '../../storage';
import { CryptoUtils } from '../../utils';
import { User_create_ReqBody_DTO } from './dto/User.create.ReqBody.dto';
import { User_getById_ReqParam_DTO } from './dto/User.getById.ReqParam.dto';
import { User_getById_ResBody_DTO } from './dto/User.getById.ResBody.dto';

@Injectable()
export class UsersService {
  async create(args: IUser_create_ReqBody_DTO): Promise<IUser_create_Result> {
    const id = CryptoUtils.generateUUID();
    return StorageApi.Users.create({
      user: {
        id,
        ...args,
      },
    });
  }

  async getById(args: User_getById_ReqParam_DTO): Promise<User_getById_ResBody_DTO> {
    return StorageApi.Users.getById(args);
  }
}
