import { ReqParam_DTO } from './ReqParam.dto';
import { IReqQuery } from './ReqQuery.dto';
import { ETestType } from '../../utils';

export interface ITest {
  id: string;
  problem_id: string;
  input: Array<any>;
  output: any;
  type: ETestType;
}

// common types
export interface ITest_ResBody_DTO {
  test: ITest;
}

export interface ITest_getMany_ResBody_DTO {
  tests: Array<ITest>;
  count: number;
}

export interface ITest_getMany_ReqQuery_DTO extends IReqQuery {
  problem_id?: string;
  type?: ETestType;
}

export interface ITest_update_ReqBody_DTO extends Partial<ITest_create_ReqBody_DTO> {}

// controller types
export interface ITest_create_ReqBody_DTO extends Omit<ITest, 'id'> {}

// storage types
export interface ITest_create_Storage_Args extends ITest {}

export interface ITest_getMany_Storage_Args
  extends ITest_getMany_ReqQuery_DTO {
  limit: number;
  offset: number;
}

// service types
export interface ITest_update_Service_Args
  extends ReqParam_DTO, ITest_update_ReqBody_DTO {}
