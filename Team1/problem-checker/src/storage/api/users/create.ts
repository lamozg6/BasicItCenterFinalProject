import { IUser_create_Args, IUserData } from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { transform } from './transformer';


export async function create(args: IUser_create_Args): Promise<IUserData> {
  const {
    id,
    name,
    surname,
    username,
    email,
    gender,
    birthdate,
  } = args;

  await UserEntity.Repository.query(`
      INSERT INTO users(id, created_at, updated_at, deleted_at, name, surname, username, email, gender, birthdate)
      VALUES ('${id}', '${new Date()}', '${new Date()}', null, '${name}', '${surname}', '${username}',
              '${email}', '${gender}', '${birthdate}');
  `);

  const result = await UserEntity.Repository.query(`
      SELECT *
      FROM users
      WHERE id = '${id}';
  `);

  return {
    user: transform(result),
  };
}
