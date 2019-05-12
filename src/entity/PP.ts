import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export default class PP {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  descr: string;
}