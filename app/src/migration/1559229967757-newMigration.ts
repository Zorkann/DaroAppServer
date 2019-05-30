import {MigrationInterface, QueryRunner} from "typeorm";

export class newMigration1559229967757 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "table" ("id" SERIAL NOT NULL, "hallNumber" integer NOT NULL, "tableNumber" integer NOT NULL, "cost" integer NOT NULL, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying, "surname" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_tables" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "tableId" integer NOT NULL, "occupiedPlaces" integer NOT NULL, CONSTRAINT "PK_9edb4cc5e829625ca2ef1005564" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user_tables"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "table"`);
    }

}
