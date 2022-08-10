import {
  IUser_delete_ReqParam_DTO,
  IUser_delete_ResBody_DTO,
} from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { generateDateInsertPSQLCommand } from '../../../utils/helpers/dateUtils';

export async function deleteById(
  args: IUser_delete_ReqParam_DTO,
): Promise<IUser_delete_ResBody_DTO> {
  const user = await UserEntity.Repository.query(`
    SELECT * from users
    WHERE deleted_at is null AND id = '${args.id}'`);

  if (!user.length) {
    throw new Error(`User with id ${args.id} is not found`);
  }

  await UserEntity.Repository.query(`
    UPDATE users
    SET deleted_at = ${generateDateInsertPSQLCommand(new Date())}
    WHERE id = '${args.id}'
  `);

  return {};
}
