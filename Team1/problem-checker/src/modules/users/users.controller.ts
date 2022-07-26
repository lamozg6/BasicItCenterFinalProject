import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  User_create_ReqBody_DTO,
  User_create_ResBody_DTO,
  User_getById_ReqParam_DTO,
  User_getById_ResBody_DTO,
  User_getMany_ReqQuery_DTO,
  User_getMany_ResBody_DTO,
  User_update_ReqParam_DTO,
  User_update_ReqBody_DTO,
  User_update_ResBody_DTO,
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

  @Get()
  async getMany(@Query() args: User_getMany_ReqQuery_DTO): Promise<User_getMany_ResBody_DTO> {
    return this.usersService.getMany(args);
  }

  @Get('/:id')
  async getById(@Param() args: User_getById_ReqParam_DTO): Promise<User_getById_ResBody_DTO> {
    return this.usersService.getById(args);
  }

  @Patch('/:id')
  async update(
    @Param() args: User_update_ReqParam_DTO,
    @Body() body: User_update_ReqBody_DTO,
  ): Promise<User_update_ResBody_DTO> {
    return this.usersService.update({
      ...args,
      ...body,
    });
  }

  @Delete('/:id')
  async delete(@Param() args: User_delete_ReqParam_DTO): Promise<User_delete_ResBody_DTO> {
    return this.usersService.delete(args);
  }
}
