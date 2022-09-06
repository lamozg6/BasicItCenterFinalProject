import { IUser_getMany_ResBody, IUser_getMany_Storage_Args } from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { transform } from './transformer';


export async function getMany(args: IUser_getMany_Storage_Args): Promise<IUser_getMany_ResBody> {
  const {
    limit,
    offset,
    gender,
    from_birthdate,
  } = args;

  let condition = 'deleted_at is null';

  if (gender !== undefined) {
    condition += `  gender = ${gender}`;
  }

  if (from_birthdate !== undefined) {
    condition += ` AND birthdate > ${from_birthdate}`;
  }

  const [{ count }] = (await UserEntity.Repository.query(`
    SELECT COUNT(*)
    FROM users
    WHERE ${condition}
  `));

  const result = await UserEntity.Repository.query(`
    SELECT *
    FROM users
    WHERE ${condition}
    LIMIT ${limit}
    OFFSET ${offset}
  `);

  return {
    users: result.map((userEntity) => transform(userEntity)),
    count,
  };
}
