import { BaseEntity } from './BaseEntity.entity';
import { Column, Entity } from 'typeorm';
import { EUserGender } from '../../../utils/enums/UserGender.enum';
import { generateRepo } from '../../../utils/helpers/dbUtils';
import { DB_CONNECTION_NAME } from '../../../constants';


@Entity('users')
export class UserEntity extends BaseEntity {
  public static get Repository() {
    return generateRepo(DB_CONNECTION_NAME, this);
  }

  @Column({ type: 'varchar', length: 256 })
  name!: string;

  @Column({ type: 'varchar', length: 256 })
  surname!: string;

  @Column({ type: 'varchar', length: 256, unique: true })
  username!: string;

  @Column({ type: 'varchar', length: 256, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 64 })
  gender!: EUserGender;

  @Column({ type: 'timestamptz' })
  birthdate!: Date;
}
