import {
  IUser_ResBody,
} from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { transform } from './transformer';
import { ReqParam_DTO } from '../../../common/types/ReqParam.dto';


export async function getById(args: ReqParam_DTO): Promise<IUser_ResBody> {
  const [result] = await UserEntity.Repository.query(`
    SELECT *
    from users
    WHERE deleted_at is null AND id = '${args.id}';
  `);

  if (!result) {
    throw new Error(`User with id ${args.id} is not found`);
  }

  return {
    user: transform(result),
  };
}
