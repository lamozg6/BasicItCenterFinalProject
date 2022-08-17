import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User_login_ReqBody_DTO } from './dto/User.login.ReqBody.dto';
import { User_register_ReqBody_DTO } from './dto/User.register.ReqBody.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  async userRegister(
    @Body() args: User_register_ReqBody_DTO,
  ): Promise<User_register_ReqBody_DTO> {
    return this.authService.userRegister(args);
  }

  @Post('/login')
  async userLogin(
    @Body() args: User_login_ReqBody_DTO,
  ): Promise<User_login_ReqBody_DTO> {
    return this.authService.userLogin(args);
  }

  @Get('/logout')
  async userLogout() {
    return this.authService.userLogout();
  }
}
