import { IUser_getById_ReqParam_DTO, IUser_getById_ResBody_DTO } from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { transform } from './transformer';


export async function getById(args: IUser_getById_ReqParam_DTO): Promise<IUser_getById_ResBody_DTO> {
  const result = await UserEntity.Repository.query(`
    SELECT *
    from users
    WHERE deleted_at is null AND id = '${args.id}';
  `);

  if (!result.length) {
    throw new Error(`User with id ${args.id} is not found`);
  }

  return {
    user: transform(result),
  };
}
