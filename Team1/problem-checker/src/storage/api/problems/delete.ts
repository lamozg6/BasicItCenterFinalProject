import {
  IProblem_delete_ReqParam_DTO,
  IProblem_delete_ResBody_DTO,
} from 'src/common/types/problem.types';
import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { generateDateInsertPSQLCommand } from 'src/utils/helpers/dateUtils';

export async function deleteById(
  args: IProblem_delete_ReqParam_DTO,
): Promise<IProblem_delete_ResBody_DTO> {
  await ProblemEntity.Repository.query(`
  UPDATE problems
  set deleted_at = ${generateDateInsertPSQLCommand(new Date())}
  WHERE id = '${args.id}'`);

  return {};
}
