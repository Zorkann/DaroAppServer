import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
export default class PP extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  number: string;

  @Column({ nullable: true })
  descr: string;
}