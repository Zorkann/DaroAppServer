import {MigrationInterface, QueryRunner} from "typeorm";

export class Test21557760604443 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "pp" ("id" SERIAL NOT NULL, "number" character varying, "descr" character varying, CONSTRAINT "PK_a165e850efcaa79d9236ba15396" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vol" ("id" SERIAL NOT NULL, "x" character varying, "y" character varying, CONSTRAINT "PK_7f577565a97c2d10e6a6bbbac0f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "firstName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastName"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "hall"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "table"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "cash"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "couples"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "title" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "text" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "couples" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "cash" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "table" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "hall" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "lastName" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "firstName" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "vol"`);
        await queryRunner.query(`DROP TABLE "pp"`);
    }
}
