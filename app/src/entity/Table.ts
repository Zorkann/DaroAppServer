import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from "typeorm";
import Hall from "./Hall";

@Entity()
export default class Table extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Hall)
  @JoinColumn()
  hall: Hall;

  @Column()
  number: number;

  @Column()
  slots: number;
}
