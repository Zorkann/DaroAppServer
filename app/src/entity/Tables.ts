import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class Table extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hallNumber: number;

  @Column()
  tableNumber: number;

  @Column()
  cost: number;
}