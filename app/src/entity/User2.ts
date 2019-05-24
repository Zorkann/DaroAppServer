import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class UserT extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  titleT: string;

  @Column({nullable: true})
  textT: string;

  @Column({nullable: true})
  textYT: string;

  @Column({nullable: true})
  textXT: string;

  @Column({nullable: true})
  textXYT: string;
}