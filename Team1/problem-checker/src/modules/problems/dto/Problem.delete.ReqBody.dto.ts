import { FieldDef } from 'src/utils';

export class Problem_delete_ReqBody_DTO {
  @FieldDef({
    type: String,
    required: true,
    nullable: false,
    is_uuid: true,
    title: 'user_id',
  })
  user_id: string;
}
