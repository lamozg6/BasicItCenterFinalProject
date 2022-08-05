import id from 'date-fns/locale/id';
import { Interface } from 'readline';
import { IReqParam_DTO } from './ReqParam.dto';

export interface IProblem {
  id: string;
  name: string;
  description: string;
  function_name: string;
}

export interface IProblemData {
  problem: IProblem;
}

// controller types
export interface IProblem_ResBody_DTO extends IProblemData {}

export interface IProblem_create_ReqBody_DTO extends Omit<IProblem, 'id'> {}

export interface IProblem_create_ResBody_DTO extends IProblem_ResBody_DTO {}

export interface IProblem_getById_ReqParam_DTO extends IReqParam_DTO {}

export interface IProblem_getById_ResBody_DTO extends IProblem_ResBody_DTO {}

export interface IProblem_delete_ReqParam_DTO extends IReqParam_DTO {}

export interface IProblem_delete_ResBody_DTO {}

// service types

// strorage types
export interface IProblem_create_Args extends IProblem {}
