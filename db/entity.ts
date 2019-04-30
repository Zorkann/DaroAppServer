import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    hall: string;

    @Column()
    table: string;

    @Column()
    cash: string;

    @Column()
    couples: string;
}