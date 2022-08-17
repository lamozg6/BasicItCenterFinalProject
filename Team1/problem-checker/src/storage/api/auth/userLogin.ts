import {
  IUser_login_ReqBody_DTO,
  IUser_login_Storage_Args,
} from 'src/common/types/user.types';
import { UserEntity } from 'src/storage/db/entities/User.entity';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export async function userLogin(
  args: IUser_login_ReqBody_DTO,
): Promise<IUser_login_Storage_Args> {
  const { email, password } = args;

  const [user] = await UserEntity.Repository.query(`
  SELECT * from users
  WHERE email = '${email}'`);

  if (!user) {
    throw new Error(`User with email ${email} does not exist`);
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error('Please provide valid password');
  }

  const token = jwt.sign({ id: user.id, name: user.name }, 'jwtSecret', {
    expiresIn: '2d',
  });

  return {
    email: args.email,
    password: args.password,
    token,
  };
}
