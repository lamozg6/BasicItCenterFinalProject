import { IsArray, IS_ARRAY, IS_UUID } from "class-validator";
import { IArgument, IProblem_create_ReqBody, IProblem_update_ReqBody, IProblem_update_ResBody, ITest } from "src/common/types/problem.types";
import { FieldDef } from "src/utils";

export class Problem_update_ReqBody_DTO implements IProblem_update_ReqBody{
    
    @FieldDef({
        type:String,
        required:false,
        nullable:false,
        title:'Problem\'s name',
    })
    name!: undefined | string;
    @FieldDef({
        type:String,
        required:false,
        nullable:false,
        title:'Problem\'s descripiton',
    })
    description!:undefined | string;
    @FieldDef({
        type:String,
        required:false,
        nullable:false,
        title:'Problem\'s solution',
    })
    solution!:undefined | null | string;
    @FieldDef({
        type:Array<IArgument>,
        required:false,
        nullable:false,
        is_array:true,
        title:'Problem\'s arguments',
    })
    arguments!:undefined | Array<IArgument>;
    @FieldDef({
        type:Array<ITest>,
        required:false,
        nullable:false,
        is_array:true,
        title:'Problems\s tests'
        
    })
    tests!:undefined | Array<ITest>;
   
    @FieldDef({
        type:Array,
        required:false,
        nullable:false,
        title:'Problems\s  test_count',
    })
    test_count!:undefined | null | number;
  
}