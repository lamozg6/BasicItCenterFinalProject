import { EOrderBy, EOrderDir } from '../../utils';


export interface IReqQuery_DTO {
  limit?: number;
  offset?: number;
  order_by?: EOrderBy;
  order_dir?: EOrderDir;
}
