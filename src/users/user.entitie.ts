import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  lastname: string;

  @Column({ type: 'text', unique: true  })
  identification: string;

  @Column({ type: 'text' })
  picture: string;

  @Column({ type: 'varchar', unique: true  })
  phone: string;

  @Column({ type: 'text' })
  gender: string;

  @Column({ type: 'text' })
  birthday: string;

  @Column({ type: 'text' })
  country: string;

  @Column({ type: 'text' })
  state: string;

  @Column({ type: 'text' })
  city: string;

  @Column({ type: 'text' })
  address: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('boolean', { default: true })
  active: boolean;

  @DeleteDateColumn()
  deleted_at: Date;
}
