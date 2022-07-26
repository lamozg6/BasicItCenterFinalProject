import { IProblem_delete_ReqParam_DTO,
  IProblem_delete_ResBody_DTO } from '../../../common/types/problem.types';
import { ProblemEntity } from '../../db/entities/Problem.entity';
import { generateDateInsertPSQLCommand } from '../../../utils';

export async function deleteById(args: IProblem_delete_ReqParam_DTO): Promise<IProblem_delete_ResBody_DTO> {
  await ProblemEntity.Repository.query(`
        UPDATE problems
        SET deleted_at = ${generateDateInsertPSQLCommand(new Date())}
        WHERE id = '${args.id}';
        `);

  return {};
}
