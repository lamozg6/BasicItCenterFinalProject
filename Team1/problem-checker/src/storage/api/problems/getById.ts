import { ProblemEntity } from 'src/storage/db/entities/Problem.entity';
import { transform } from './transformer';
import { ReqParam_DTO } from '../../../common/types/ReqParam.dto';
import { IProblem_ResBody } from '../../../common/types/problem.types';

export async function getById(args: ReqParam_DTO): Promise<IProblem_ResBody> {
  const [result] = await ProblemEntity.Repository.query(`
      SELECT * FROM PROBLEMS 
      WHERE deleted_at is null AND id = ${args.id}
  `);

  if (!result) {
    throw Error (`${args.id}  id not found`);
  }

  return {
    problem: transform(result),
  };
}
