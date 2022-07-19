import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  User_create_ReqBody_DTO,
  User_create_ResBody_DTO,
  User_getById_ReqParam_DTO,
  User_getById_ResBody_DTO,
  User_delete_ReqParam_DTO,
  User_delete_ResBody_DTO,
} from './dto';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  async create(@Body() args: User_create_ReqBody_DTO): Promise<User_create_ResBody_DTO> {
    return this.usersService.create(args);
  }

  @Get('/:id')
  async getById(@Param() args: User_getById_ReqParam_DTO): Promise<User_getById_ResBody_DTO> {
    return this.usersService.getById(args);
  }

  @Delete('/:id')
  async delete(@Param() args: User_delete_ReqParam_DTO): Promise<User_delete_ResBody_DTO> {
    return this.usersService.delete(args);
  }
}
