import { UserEntity } from '../../db/entities/User.entity';
import { generateDateInsertPSQLCommand } from '../../../utils/helpers/dateUtils';
import { ReqParam_DTO } from '../../../common/types/ReqParam.dto';
import { IDelete_ResBody_DTO } from '../../../common/types/Delete.ResBody.dto';


export async function deleteById(args: ReqParam_DTO): Promise<IDelete_ResBody_DTO> {
  await UserEntity.Repository.query(`
    UPDATE users
    SET deleted_at = ${generateDateInsertPSQLCommand(new Date())}
    WHERE id = '${args.id}'
  `);

  return {};
}
