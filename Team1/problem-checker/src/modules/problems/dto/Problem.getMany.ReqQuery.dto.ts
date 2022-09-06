import { IProblem_getMany_ReqQuery } from 'src/common/types/problem.types';
import { EOrderBy, EOrderDir, FieldDef } from 'src/utils';

export class Problem_getMany_ReqQuery_DTO implements IProblem_getMany_ReqQuery {
  @FieldDef({
    type: Number,
    required: false,
    nullable: false,
    title: 'Get many request\'s limit',
    is_int: true,
    example: 10,
    min: 1,
    default: 10,
  })
  limit!: undefined | number;

  @FieldDef({
    type: Number,
    required: false,
    nullable: false,
    title: 'Get many request\'s offset',
    is_int: true,
    example: 0,
    min: 0,
    default: 0,
  })
  offset!: undefined | number;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Order by field',
    enum: EOrderBy,
  })
  order_by!: EOrderBy;

  @FieldDef({
    type: String,
    required: false,
    nullable: false,
    title: 'Order dir field',
    enum: EOrderDir,
  })
  order_dir!: EOrderDir;
}
