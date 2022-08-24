import { IProblem_delete_ReqParam, IProblem_delete_ResBody} from '../../../common/types/problem.types';
import { ProblemEntity } from '../../db/entities/Problem.entity';
import { generateDateInsertPSQLCommand } from '../../../utils/helpers/dateUtils';


export async function deleteById(args: IProblem_delete_ReqParam): Promise<IProblem_delete_ResBody> {
  await ProblemEntity.Repository.query(`
    UPDATE problems
    SET deleted_at = ${generateDateInsertPSQLCommand(new Date())}
    WHERE id = '${args.id}'
  `);

  return {};
}