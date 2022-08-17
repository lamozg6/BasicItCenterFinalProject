import { Injectable } from '@nestjs/common';
import { IUser_register_ResBody_DTO } from 'src/common/types/user.types';
import { StorageApi } from 'src/storage';
import { CryptoUtils } from 'src/utils';

import * as jwt from 'jsonwebtoken';
import { User_register_ReqBody_DTO } from './dto/User.register.ReqBody.dto';

@Injectable()
export class AuthService {
  async userRegister(
    args: User_register_ReqBody_DTO,
  ): Promise<IUser_register_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    const token = jwt.sign({ userid: id, name: args.name }, 'jwtSecret', {
      expiresIn: '2d',
    });
    return StorageApi.Auth.userRegister({ id, token, ...args });
  }

  async userLogin() {
    return StorageApi.Auth.userLogin();
  }

  async userLogout() {
    return StorageApi.Auth.userLogout();
  }
}
