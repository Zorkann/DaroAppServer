import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class Table extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tableNumber: number;

  @Column()
  slots: number;

  @Column()
  hall: number; //FK(HALL)
}