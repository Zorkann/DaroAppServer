import { Entity, PrimaryGeneratedColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import Guest from './User';
import Event from './Event';

@Entity()
export default class GuestList extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Event)
  @JoinColumn()
  event: Event;

  @OneToOne(() => Guest)
  @JoinColumn()
  guest: Guest;

}
