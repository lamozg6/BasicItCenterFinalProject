import { BaseEntity } from './BaseEntity.entity';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { EUserGender } from '../../../utils/enums/UserGender.enum';
import { generateRepo } from '../../../utils/helpers/dbUtils';
import { DB_CONNECTION_NAME } from '../../../constants';
import { UserEntity } from './User.entity';
import { ProblemEntity } from './Problem.entity';
import { ETestType } from '../../../utils';


@Entity('tests')
export class TestEntity extends BaseEntity {
  public static get Repository() {
    return generateRepo(DB_CONNECTION_NAME, this);
  }

  @Index()
  @ManyToOne(() => ProblemEntity)
  @JoinColumn({ name: 'problem_id' })
  problem!: ProblemEntity;

  @Column({ array: true })
  input: Array<any>;

  @Column()
  output: any;

  @Column({ type: 'varchar', length: 64 })
  type: ETestType;
}
