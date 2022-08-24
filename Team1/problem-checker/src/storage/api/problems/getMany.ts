import { Problem_getMany_ReqQuery_DTO } from "src/modules/problems/dto";
import { Problem_getMany_ResBody_DTO } from "src/modules/problems/dto/Problem.getMany.ResBody.dto";
import { ProblemEntity } from "src/storage/db/entities/Problem.entity";
import { transform } from "./transformer";

export async function getMany(args:Problem_getMany_ReqQuery_DTO):Promise<Problem_getMany_ResBody_DTO>{
    const{
       limit,
       offset,
       order_by,
       order_dir,
    } = args;
    // export async function getMany(args: IUser_getMany_Storage_Args): Promise<User_getMany_ResBody_DTO> {
    //   const {
    //     limit,
    //     offset,
    //     gender,
    //     from_birthdate,
    //   } = args;

    let condition = 'deleted_at is null'

   if(order_by !== undefined){
    condition += ` AND order by = ${order_by}`;
   }
   if(order_dir !== undefined){
    condition += `AND order_dir = ${order_dir}`;
   }

   const [{count}] = (await ProblemEntity.Repository.query(`
     SELECT COUNT(*)
     FROM problems
     WHERE ${condition}
   `))

   const result = await ProblemEntity.Repository.query(`
     SELECT * 
     FROM problems 
     WHERE ${condition}
     LIMIT ${limit}
     OFFSET ${offset}
   `)

   return {
    problems: result.map((problemEntity => transform(problemEntity))),
    count,
   }
}