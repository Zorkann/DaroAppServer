import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class Vol extends BaseEntity{

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  x: string;

  @Column({nullable: true})
  y: string;
}