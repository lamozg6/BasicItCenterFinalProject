import { BaseEntity } from './BaseEntity.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { generateRepo } from '../../../utils/helpers/dbUtils';
import { DB_CONNECTION_NAME } from '../../../constants';
import { UserEntity } from './User.entity';
import { IArgument } from 'src/common/types/problem.types';

@Entity('problems')
export class ProblemEntity extends BaseEntity {
  public static get Repository() {
    return generateRepo(DB_CONNECTION_NAME, this);
  }

  @Index()
  @ManyToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @Column({ type: 'varchar', length: 256 })
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @Column({ type: 'text' })
  solution!: string;

  @Column({ type: 'jsonb' })
  arguments!: Array<IArgument>;
}
