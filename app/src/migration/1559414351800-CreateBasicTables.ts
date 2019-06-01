import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBasicTables1559414351800 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "event" ("id" SERIAL NOT NULL, "date" TIMESTAMP NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "surname" character varying NOT NULL, CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "guest_list" ("id" SERIAL NOT NULL, "guestId" integer, "eventId" integer, CONSTRAINT "REL_d7709be221e7c59e349d9c7675" UNIQUE ("guestId"), CONSTRAINT "REL_7cec5709dd9aa8a26551900c11" UNIQUE ("eventId"), CONSTRAINT "PK_27ccb6a1c980ca824527a47beb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hall" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4b7ec43f24e82084474569abec5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "table" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "slots" integer NOT NULL, "hallId" integer, CONSTRAINT "REL_d900ed59a2f36d8d6f8e484a9e" UNIQUE ("hallId"), CONSTRAINT "PK_28914b55c485fc2d7a101b1b2a4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reservation" ("id" SERIAL NOT NULL, "amount" integer NOT NULL, "participants" integer NOT NULL, "guestId" integer, "eventId" integer, "tableId" integer, CONSTRAINT "REL_005fbe8bc326fced13b5751aeb" UNIQUE ("guestId"), CONSTRAINT "REL_eda8fcaaa71703a532e1c9eca0" UNIQUE ("eventId"), CONSTRAINT "REL_d221f3398a0352970306b3dc67" UNIQUE ("tableId"), CONSTRAINT "PK_48b1f9922368359ab88e8bfa525" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "guest_list" ADD CONSTRAINT "FK_d7709be221e7c59e349d9c76758" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guest_list" ADD CONSTRAINT "FK_7cec5709dd9aa8a26551900c113" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "table" ADD CONSTRAINT "FK_d900ed59a2f36d8d6f8e484a9e7" FOREIGN KEY ("hallId") REFERENCES "hall"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_005fbe8bc326fced13b5751aeb3" FOREIGN KEY ("guestId") REFERENCES "guest"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_eda8fcaaa71703a532e1c9eca0a" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reservation" ADD CONSTRAINT "FK_d221f3398a0352970306b3dc676" FOREIGN KEY ("tableId") REFERENCES "table"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_d221f3398a0352970306b3dc676"`);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_eda8fcaaa71703a532e1c9eca0a"`);
        await queryRunner.query(`ALTER TABLE "reservation" DROP CONSTRAINT "FK_005fbe8bc326fced13b5751aeb3"`);
        await queryRunner.query(`ALTER TABLE "table" DROP CONSTRAINT "FK_d900ed59a2f36d8d6f8e484a9e7"`);
        await queryRunner.query(`ALTER TABLE "guest_list" DROP CONSTRAINT "FK_7cec5709dd9aa8a26551900c113"`);
        await queryRunner.query(`ALTER TABLE "guest_list" DROP CONSTRAINT "FK_d7709be221e7c59e349d9c76758"`);
        await queryRunner.query(`DROP TABLE "reservation"`);
        await queryRunner.query(`DROP TABLE "table"`);
        await queryRunner.query(`DROP TABLE "hall"`);
        await queryRunner.query(`DROP TABLE "guest_list"`);
        await queryRunner.query(`DROP TABLE "guest"`);
        await queryRunner.query(`DROP TABLE "event"`);
    }

}
