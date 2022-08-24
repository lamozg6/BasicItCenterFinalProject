import { FieldDef } from "src/utils";
import { IArgument, IProblem } from "src/common/types/problem.types";

export class Problem_DTO implements IProblem{
    @FieldDef({
        type:String,
        required:true,
        nullable:false,
        is_uuid:true,
        title:'Problem\'s  id',
    })
    id!:string;
    @FieldDef({
        type:String,
        required:true,
        nullable:false,
        title:'Problem\'s name',
    })
    name!:string;
    @FieldDef({
        type:String,
        required:true,
        nullable:false,
        title:'Problem\'s descripiton',
    })
    description!:string;
    @FieldDef({
        type:String,
        required:true,
        nullable:false,
        title:'Problem\'s solution',
    })
    solution!:null | string;
    @FieldDef({
        type:String,
        required:true,
        nullable:false,
        title:'Problem\'s arguments',
    })
    arguments!:Array<IArgument>;
  
}