import { ReqParam_DTO } from './ReqParam.dto';
import { IReqQuery } from './ReqQuery.dto';
import { IUser_getMany_ReqQuery } from './user.types';

export interface IProblem {
  id: string;
  name: string;
  description: string;
  solution: null | string;
  arguments: Array<IArgument>;
}

export interface IProblem_ResBody {
  problem: IProblem;
}

export interface IProblem_getMany_ResBody {
  problems: Array<IProblem>;
  count: number;
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
export interface IProblem_create_ReqBody extends Omit<IProblem, 'id'> {
  tests : null | Array<ITest>;
  test_count: null | number;
}

export interface ITest {
  input: Array<any>,
  output: any,
}

export interface IProblem_create_Storage_Args extends IProblem {}

export interface IProblem_getMany_ReqQuery extends IReqQuery {}

export interface IProblem_update_ReqBody extends Partial<IProblem_create_ReqBody>  {}

export interface IProblem_update_Service_Args extends
  ReqParam_DTO, IProblem_update_ReqBody {}

export interface IProblem_getMany_Storage_Args
  extends IProblem_getMany_ReqQuery {
  limit: number;
  offset: number;
}
