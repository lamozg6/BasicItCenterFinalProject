import { throwError } from "rxjs";
import { Problem_getById_ReqParam_DTO } from "src/modules/problems/dto/Problem_getById_ReqParam.dto";
import { Problem_getById_ResBody_DTO } from "src/modules/problems/dto/Problem_getById_ResBody.dto";
import { ProblemEntity } from "src/storage/db/entities/Problem.entity";
import { transform } from "./transformer";

export  async  function getById(args:Problem_getById_ReqParam_DTO):Promise<Problem_getById_ResBody_DTO>{
     const [result] = await ProblemEntity.Repository.query(`
      SELECT * FROM PROBLEMS 
        WHERE deleted_at is null AND id = ${args.id}`
     )

     if(!result){
        throw Error (`${args.id}  id not found`)
     }

     return {
        problem: transform(result),
     }
    
}

