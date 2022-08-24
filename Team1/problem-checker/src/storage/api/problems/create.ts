
import  { IProblem_Storage_Args,IProblemData } from "src/common/types/problem.types";
import { ProblemEntity } from "src/storage/db/entities/Problem.entity";
import { Repository } from "typeorm";
import {transform} from './transformer';




export async  function create(args:IProblem_Storage_Args): Promise<IProblemData>{
     const{
        id,
        name,
        description,
        solution,
        // arguments,
     } = args;
     await ProblemEntity.Repository.query(
        ` INSERT INTO problems (id,created_at,updated_at,deleted_at,name,description,solution,arguments) 
          VALUES ('${id}','${new Date()}','${new Date()}','null','${name}','${description}','${solution}','${arguments}') ;
          `);

          const [result] = await ProblemEntity.Repository.query(`
          Select * 
          FROM problems
          WHERE id = '${id}';
          `)

          return {
            problem: transform(result),
          };
}

