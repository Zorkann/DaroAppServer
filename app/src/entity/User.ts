import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  title: string;

  @Column({nullable: true})
  text: string;

  @Column({nullable: true})
  textY: string;

  @Column({nullable: true})
  textX: string;

  @Column({nullable: true})
  textXY: string;
}