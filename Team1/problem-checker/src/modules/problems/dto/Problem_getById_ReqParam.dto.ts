import { IProblem_getById_ReqParam} from "src/common/types/problem.types";
import { FieldDef } from "src/utils";

export class Problem_getById_ReqParam_DTO implements IProblem_getById_ReqParam {
    @FieldDef({
       type:String,
       required:true,
       nullable:false,
       is_uuid:true,
       title:'Problem\'s id',
    })
        id!:string;
}