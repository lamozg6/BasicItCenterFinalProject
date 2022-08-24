import { ECreated_at_ReqQuery, EOrderDir } from "src/utils";
import { IReqParam_DTO } from "./ReqParam.dto";
import { IReqQuery_DTO } from "./ReqQuery.dto";

export interface IProblem{
    id:string;
    name:string;
    description:string;
    solution:null | string;
    arguments:Array<IArgument>; 
}

export interface IProblemData{
    problem:IProblem,
}

 export interface IBaseArgument {
    name: string;
    }
    
export interface IArgument {
    type: number | string;
    content: INumberArgument | IStringArgument;
    }

    export interface INumberArgument extends IBaseArgument {
    min: number;
    max: number;
    }
    
    export interface IStringArgument extends IBaseArgument {
    min_length: number;
    max_length: number;
    }

// common types
export interface IProblem_getById_ReqParam extends IReqParam_DTO {}
// export interface IUser_getById_ReqParam_DTO extends IReqParam_DTO {}
export interface IProblem_getById_ResBody extends IProblem_ResBody {}
// export interface IUser_getById_ResBody_DTO extends IUser_ResBody_DTO {}
// controller types

export interface IProblem_ResBody extends IProblemData {}
// export interface IUser_ResBody_DTO extends IUserData {}
export interface IProblem_create_ReqBody extends Omit<IProblem,'id'> {
    tests : null | Array<ITest>;
    test_count: null | number;
}
export interface ITest {
    input: Array<any>,
    output: any,
}


export interface IProblem_create_ResBody extends IProblem_ResBody {}
// export interface IUser_create_ResBody_DTO extends IUser_ResBody_DTO {}
// service types/


export interface IProblem_create_Args extends IProblem {}

export interface IProblem_create_Result extends IProblem_ResBody {}
 // controller types
// export interface IUser_create_ReqBody_DTO extends Omit<IUser, 'id'> {}
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export interface IProblem_getMany_ReqQuery extends IReqQuery_DTO {
    order_by: ECreated_at_ReqQuery;
    order_dir: EOrderDir;
}
// export interface IUser_getMany_ReqQuery_DTO extends IReqQuery_DTO {
//   gender: undefined | EUserGender;
//   from_birthdate: undefined | Date;
// }

export interface IProblem_getMany_ResBody {
    problems: Array<IProblem>;
    count: number;
  }
// export interface IUser_getMany_ResBody_DTO {
//   users: Array<IUser>;
//   count: number;
// }
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
export interface IProblem_update_ReqParam extends IReqParam_DTO {}
// export interface IUser_update_ReqParam_DTO extends IReqParam_DTO {}
export interface IProblem_update_ReqBody extends Partial<IProblem_create_ReqBody>  {}
// export interface IUser_update_ReqBody_DTO extends Partial<IUser_create_ReqBody_DTO> {}
export interface IProblem_update_ResBody extends IProblem_ResBody{}
// export interface IUser_update_ResBody_DTO extends IUser_ResBody_DTO {}

export interface IProblem_update_Service_Args extends 
IProblem_update_ReqParam,IProblem_update_ReqBody {}
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// // service types
// export interface IUser_update_Service_Args
//   extends IUser_update_ReqParam_DTO, IUser_update_ReqBody_DTO {}expr
export interface IProblem_delete_ReqParam extends IReqParam_DTO{}
// export interface IUser_delete_ReqParam_DTO extends IReqParam_DTO {}
export interface IProblem_delete_ResBody {}
// / export interface IUser_delete_ResBody_DTO {}

// storage types
export interface IProblem_Storage_Args extends IProblem {}















// // storage types
// export interface IUser_create_Storage_Args extends IUser {}

// export interface IUser_getMany_Storage_Args
//   extends IUser_getMany_ReqQuery_DTO {
//   limit: number;
//   offset: number;
// }

