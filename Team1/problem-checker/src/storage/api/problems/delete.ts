import { ProblemEntity } from '../../db/entities/Problem.entity';
import { generateDateInsertPSQLCommand } from '../../../utils/helpers/dateUtils';
import { ReqParam_DTO } from '../../../common/types/ReqParam.dto';
import { IDelete_ResBody } from '../../../common/types/Delete.ResBody.dto';


export async function deleteById(args: ReqParam_DTO): Promise<IDelete_ResBody> {
  await ProblemEntity.Repository.query(`
    UPDATE problems
    SET deleted_at = ${generateDateInsertPSQLCommand(new Date())}
    WHERE id = '${args.id}'
  `);

  return {};
}
