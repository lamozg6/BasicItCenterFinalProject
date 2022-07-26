import { Column, Entity } from 'typeorm';
import { BaseEntity } from './BaseEntity.entity';
import { generateRepo } from '../../../utils/helpers/dbUtils';
import { DB_CONNECTION_NAME } from '../../../constants';

@Entity('problems')
export class ProblemEntity extends BaseEntity {
  public static get Repository() {
    return generateRepo(DB_CONNECTION_NAME, this);
  }

  @Column({ type: 'varchar', length: 256 })
    name!: string;

  @Column({ type: 'varchar', length: 256 })
    description!: string;

  @Column({ type: 'varchar', length: 256 })
    function_name!: string;
}
