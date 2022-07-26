import { IUser_delete_ReqParam_DTO, IUser_delete_ResBody_DTO } from '../../../common/types/user.types';
import { UserEntity } from '../../db/entities/User.entity';
import { generateDateInsertPSQLCommand } from '../../../utils';


export async function deleteById(args: IUser_delete_ReqParam_DTO): Promise<IUser_delete_ResBody_DTO> {
  await UserEntity.Repository.query(`
    UPDATE users
    SET deleted_at = ${generateDateInsertPSQLCommand(new Date())}
    WHERE id = '${args.id}'
  `);

  return {};
}
