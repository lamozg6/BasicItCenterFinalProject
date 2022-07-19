import { IUser_getById_ReqParam_DTO, IUser_getById_ResBody_DTO } from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { transform } from './transformer';


export async function getById(args: IUser_getById_ReqParam_DTO): Promise<IUser_getById_ResBody_DTO> {
  const result = await UserEntity.Repository.query(`
    SELECT * from users WHERE id = '${args.id}';
  `);

  return {
    user: transform(result),
  };
}
