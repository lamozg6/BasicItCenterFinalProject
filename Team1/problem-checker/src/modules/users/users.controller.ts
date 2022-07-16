import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { IUser } from '../../common/types/user.types';
import { User_create_ReqBody_DTO } from './dto/User.create.ReqBody.dto';
import { User_create_ResBody_DTO } from './dto/User.create.ResBody.dto';
import { CryptoUtils } from '../../utils';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  async create(@Body() args: User_create_ReqBody_DTO): Promise<User_create_ResBody_DTO> {
    const id = CryptoUtils.generateUUID();
    return this.usersService.create({
      id,
      ...args,
    });
  }
}
