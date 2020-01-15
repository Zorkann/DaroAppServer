import {MigrationInterface, QueryRunner} from "typeorm";

export class correct1579104666447 implements MigrationInterface {
    name = 'correct1579104666447'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "date" integer NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "guest" ("id" SERIAL NOT NULL, "name" character varying, "surname" character varying, CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "guest_list" ("id" SERIAL NOT NULL, "eventId" integer, "guestId" integer, CONSTRAINT "REL_7cec5709dd9aa8a26551900c11" UNIQUE ("eventId"), CONSTRAINT "REL_d7709be221e7c59e349d9c7675" UNIQUE ("guestId"), CONSTRAINT "PK_27ccb6a1c980ca824527a47beb5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "hall" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4b7ec43f24e82084474569abec5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "table" ("id" SERIAL NOT NULL, "tableNumber" integer NOT NULL, "slots" integer NOT NULL, "hall" integer NOT NULL, CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "reservation" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "participants" integer NOT NULL, "eventId" integer, "guestId" integer, "tableId" integer, CONSTRAINT "REL_eda8fcaaa71703a532e1c9eca0" UNIQUE ("eventId"), CONSTRAINT "REL_005fbe8bc326fced13b5751aeb" UNIQUE ("guestId"), CONSTRAINT "REL_d221f3398a0352970306b3dc67" UNIQUE ("tableId"), CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "guest_list" ADD CONSTRAINT "FK_7cec5709dd9aa8a26551900c113" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "guest_list" ADD CONSTRAINT "FK_d7709be221e7c59e349d9c76758" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_eda8fcaaa71703a532e1c9eca0a" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_005fbe8bc326fced13b5751aeb3" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_d221f3398a0352970306b3dc676" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_d221f3398a0352970306b3dc676"`, undefined);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_005fbe8bc326fced13b5751aeb3"`, undefined);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_eda8fcaaa71703a532e1c9eca0a"`, undefined);
        await queryRunner.query(`ALTER TABLE "guest_list" DROP CONSTRAINT "FK_d7709be221e7c59e349d9c76758"`, undefined);
        await queryRunner.query(`ALTER TABLE "guest_list" DROP CONSTRAINT "FK_7cec5709dd9aa8a26551900c113"`, undefined);
        await queryRunner.query(`DROP TABLE "reservation"`, undefined);
        await queryRunner.query(`DROP TABLE "table"`, undefined);
        await queryRunner.query(`DROP TABLE "hall"`, undefined);
        await queryRunner.query(`DROP TABLE "guest_list"`, undefined);
        await queryRunner.query(`DROP TABLE "guest"`, undefined);
        await queryRunner.query(`DROP TABLE "event"`, undefined);
    }

}
