import { IReqParam_DTO } from './ReqParam.dto';
import { IReqQuery_DTO } from './ReqQuery.dto';

export interface IProblem {
    id: string;
    name: string;
    description: string;
    function_name: string;
}

export interface IProblemData {
   problem: IProblem;
}

export interface IProblem_ResBody_DTO extends IProblemData {}

export interface IProblem_create_ReqBody_DTO extends Omit<IProblem, 'id'> {}

export interface IProblem_create_ResBody_DTO extends IProblem_ResBody_DTO {}

export interface IProblem_getMany_ReqQuery_DTO extends IReqQuery_DTO {}

export interface IProblem_getMany_ResBody_DTO {
    problems: Array<IProblem>;
    count: number;
}

export interface IProblem_getById_ReqParam_DTO extends IReqParam_DTO {}

export interface IProblem_getById_ResBody_DTO extends IProblem_ResBody_DTO {}

export interface IProblem_update_ReqParam_DTO extends IReqParam_DTO {}

export interface IProblem_update_ReqBody_DTO extends Partial<IProblem_create_ReqBody_DTO> {}

export interface IProblem_update_ResBody_DTO extends IProblem_ResBody_DTO {}

export interface IProblem_delete_ReqParam_DTO extends IReqParam_DTO {}

export interface IProblem_delete_ResBody_DTO {}

export interface IProblem_create_Storage_Args extends IProblem {}

export interface IProblem_getMany_Storage_Args extends IProblem_getMany_ReqQuery_DTO {
    limit: number;
    offset: number;
}

export interface IProblem_update_Service_Args
  extends IProblem_update_ReqParam_DTO, IProblem_update_ReqBody_DTO {}
