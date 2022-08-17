import { IProblem_getMany_ReqQuery_DTO } from 'src/common/types/problem.types';
import { FieldDef } from 'src/utils';

export class Problem_getMany_ReqQuery_DTO
  implements IProblem_getMany_ReqQuery_DTO
{
  @FieldDef({
    type: Number,
    required: false,
    nullable: false,
    title: 'Get many request limit',
    is_int: true,
    example: 10,
    min: 1,
    default: 10,
  })
  limit: undefined | number;

  @FieldDef({
    type: Number,
    required: false,
    nullable: false,
    title: 'Get many request offset',
    is_int: true,
    example: 0,
    min: 0,
    default: 0,
  })
  offset: undefined | number;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Problem name',
  })
  name: undefined | String;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Problem function name',
  })
  function_name: undefined | String;
}
