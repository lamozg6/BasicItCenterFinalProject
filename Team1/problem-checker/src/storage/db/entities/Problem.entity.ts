import { type } from 'os';
import { DB_CONNECTION_NAME } from 'src/constants';
import { generateRepo } from 'src/utils/helpers/dbUtils';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity.entity';

@Entity('problems')
export class ProblemEntity extends BaseEntity {
  public static get Repository() {
    return generateRepo(DB_CONNECTION_NAME, this);
  }

  @Column({ type: 'varchar', length: 256, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 512 })
  description: string;

  @Column({ type: 'varchar', length: 256 })
  function_name: string;

  @Column({ type: 'varchar', length: 256 })
  user_id: string;
}
