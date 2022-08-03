import { Column, Index, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
  @Index({ unique: true })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // @Column({ type: 'timestamptz' })
  // created_at!: Date;

  // @Column({ type: 'timestamptz' })
  // updated_at!: Date;

  // @Index()
  // @Column({ type: 'timestamptz', nullable: true })
  // deleted_at!: null | Date;
}
