import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn
} from "typeorm";
import Guest from "./Guest";
import Event from "./Event";

@Entity()
export default class GuestList extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(type => Guest)
  @JoinColumn()
  guest: Guest;

  @OneToOne(type => Event)
  @JoinColumn()
  event: Event;
}
