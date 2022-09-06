import { BaseEntity } from './BaseEntity.entity';
import { Column, Entity } from 'typeorm';
import { generateRepo } from '../../../utils/helpers/dbUtils';
import { DB_CONNECTION_NAME } from '../../../constants';
import { IArgument } from 'src/common/types/problem.types';
import { ITest } from 'src/common/types/problem.types';


@Entity('problems')
export class ProblemEntity extends BaseEntity {
  public static get Repository() {
    return generateRepo(DB_CONNECTION_NAME, this);
  }
  @Column({ type: 'varchar', length: 256 })
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text' })
  solution!: string;

  @Column({ type: 'jsonb' })
  arguments!: Array<IArgument>;
}
