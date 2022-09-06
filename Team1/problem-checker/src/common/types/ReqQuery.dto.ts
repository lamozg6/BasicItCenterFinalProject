import { EOrderBy, EOrderDir } from '../../utils';


export interface IReqQuery {
  limit?: number;
  offset?: number;
  order_by?: EOrderBy;
  order_dir?: EOrderDir;
}
