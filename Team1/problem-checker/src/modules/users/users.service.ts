import { Injectable } from '@nestjs/common';
import { IUser_create_Args, IUser_create_Result } from '../../common/types/user.types';
import { StorageApi } from '../../storage';

@Injectable()
export class UsersService {
  async create(args: IUser_create_Args): Promise<IUser_create_Result> {
    return StorageApi.Users.create({
      user: args,
    });
  }
}
