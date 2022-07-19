import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User_create_ReqBody_DTO } from './dto/User.create.ReqBody.dto';
import { User_create_ResBody_DTO } from './dto/User.create.ResBody.dto';
import { CryptoUtils } from '../../utils';
import { User_getById_ReqParam_DTO } from './dto/User.getById.ReqParam.dto';
import { User_getById_ResBody_DTO } from './dto/User.getById.ResBody.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  async create(@Body() args: User_create_ReqBody_DTO): Promise<User_create_ResBody_DTO> {
    return this.usersService.create(args);
  }

  @Get('/:id')
  async getById(@Param('id') args: User_getById_ReqParam_DTO): Promise<User_getById_ResBody_DTO> {
    return this.usersService.getById(args);
  }
}
