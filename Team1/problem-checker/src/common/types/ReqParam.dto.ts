import { FieldDef } from '../../utils';


export class ReqParam_DTO {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'User\'s id',
  })
  id!: string;
}
