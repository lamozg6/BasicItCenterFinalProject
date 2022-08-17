import { IUser_register_ResBody_DTO } from 'src/common/types/user.types';
import * as bcrypt from 'bcrypt';
import { UserEntity } from 'src/storage/db/entities/User.entity';
import { generateDateInsertPSQLCommand } from 'src/utils/helpers/dateUtils';

export async function userRegister(
  args: IUser_register_ResBody_DTO,
): Promise<IUser_register_ResBody_DTO> {
  const {
    id,
    name,
    surname,
    username,
    email,
    gender,
    role,
    birthdate,
    password,
    token,
  } = args;
  const hashPassword = bcrypt.hashSync(password, 10).toString();

  await UserEntity.Repository.query(`
  INSERT INTO users(id, created_at, updated_at, deleted_at, name, surname, username,
    email, gender, birthdate, role, password)
VALUES ('${id}', ${generateDateInsertPSQLCommand(new Date())},
  ${generateDateInsertPSQLCommand(new Date())}, null, '${name}',
  '${surname}', '${username}', '${email}', '${gender}',
  ${generateDateInsertPSQLCommand(birthdate)}, '${role}', '${hashPassword}');  
  `);

  return {
    token,
    id,
    name,
    surname,
    username,
    email,
    gender,
    role,
    birthdate,
    password,
  };
}
