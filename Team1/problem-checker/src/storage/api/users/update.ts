import { IUser_update_Service_Args } from '../../../common/types/user.types';
import { User_update_ResBody_DTO } from '../../../modules/users/dto';
import { UserEntity } from '../../db/entities/User.entity';
import { getById } from './getById';
import { generateDateInsertPSQLCommand } from '../../../utils/helpers/dateUtils';


export async function update(args: IUser_update_Service_Args): Promise<User_update_ResBody_DTO> {
  let values_to_set = '';

  for (const [key, value] of Object.entries(args)) {
    if (key !== 'id') {
      if (value instanceof Date) {
        values_to_set += `${key}= ${generateDateInsertPSQLCommand(value)},`;
      }
      else {
        values_to_set += `${key}='${value}',`;
      }
    }
  }

  if (!values_to_set.length) {
    throw new Error('Nothing to update in request body');
  }

  values_to_set = values_to_set.slice(0, -1);

  await UserEntity.Repository.query(`
    UPDATE users
    SET ${values_to_set}
    WHERE deleted_at is null AND id = '${args.id}';
  `);

  return getById(args);
}
