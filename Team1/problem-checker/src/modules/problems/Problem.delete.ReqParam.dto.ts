import { IReqParam_DTO } from "src/common/types/ReqParam.dto";
import { FieldDef } from "src/utils";
export class Problem_delete_ReqParam_DTO implements IReqParam_DTO{
    @FieldDef({
        type: String,
        required: true,
        nullable: false,
        is_uuid: true,
        title: 'User\'s id',
      })
      id!: string;
}