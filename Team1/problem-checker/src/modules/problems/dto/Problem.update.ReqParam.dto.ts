import { IProblem_update_ReqParam } from "src/common/types/problem.types";
import { IReqParam_DTO } from "src/common/types/ReqParam.dto";
import { FieldDef } from "src/utils";

export class Problem_update_ReqParam_DTO implements IProblem_update_ReqParam{
  @FieldDef({
      type:String,
      required:true,
      nullable:false,
      is_uuid:true,
      title:'Problem\'s id'
  })
  id:string;
}

