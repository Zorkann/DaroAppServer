import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from "typeorm";
import Guest from "./Guest";
import Event from "./Event";
import Table from "./Table";

@Entity()
export default class Reservation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Guest)
  @JoinColumn()
  guest: Guest;

  @OneToOne(type => Event)
  @JoinColumn()
  event: Event;

  @OneToOne(type => Table)
  @JoinColumn()
  table: Table;

  @Column()
  amount: number;

  @Column()
  participants: number;
}
