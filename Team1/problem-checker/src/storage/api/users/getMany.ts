import { IUser_getMany_ResBody_DTO,
  IUser_getMany_Storage_Args } from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { transform } from './transformer';

export async function getMany(args: IUser_getMany_Storage_Args): Promise<IUser_getMany_ResBody_DTO> {
  const {
    limit,
    offset,
    gender,
    from_birthdate,
  } = args;

  let condition = 'deleted_at is null';

  if (gender !== undefined) {
    condition += ` AND gender =  '${gender}'`;
  }

  if (from_birthdate !== undefined) {
    condition += (` AND birthdate > ${from_birthdate}`);
  }

  const [{ count }] = await UserEntity.Repository.query(`
  SELECT COUNT (*)
  from users
  WHERE ${condition}
  `);

  const result = await UserEntity.Repository.query(`
  SELECT *
  from users
  WHERE ${condition}
  LIMIT ${limit}
  OFFSET ${offset};
  `);

  return {
    users: result.map((userEntity) => transform(userEntity)),
    count,
  };
}
