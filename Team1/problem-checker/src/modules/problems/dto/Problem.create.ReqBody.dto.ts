import { IProblem_create_ReqBody } from "src/common/types/problem.types";
import { FieldDef } from "src/utils";
import { IArgument } from "src/common/types/problem.types";

export class Problem_create_ReqBody_DTO implements IProblem_create_ReqBody{
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
        type:Array,
        required:true,
        nullable:false,
        title:'Problem\'s arguments',
    })
    arguments!:Array<IArgument>;
    tests
    test_count
    
  
}