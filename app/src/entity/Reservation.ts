import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from "typeorm";
import Guest from "./User";
import Event from "./Event";
import Table from "./Table";

@Entity()
export default class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Event)
  @JoinColumn()
  event: Event;

  @OneToOne(() => Guest)
  @JoinColumn()
  guest: Guest;

  @OneToOne(() => Table)
  @JoinColumn()
  table: Table;

  @Column()
  amount: number;

  @Column()
  participants: number;
}
