import {MigrationInterface, QueryRunner} from "typeorm";

export class Test41558704897003 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "user_t" ("id" SERIAL NOT NULL, "titleT" character varying, "textT" character varying, "textYT" character varying, "textXT" character varying, "textXYT" character varying, CONSTRAINT "PK_1fd0cae6bab54c726a82602bfd0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "titleT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textYT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textXT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textXYT"`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" ADD "textXYT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textXT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textYT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "titleT" character varying`);
        await queryRunner.query(`DROP TABLE "user_t"`);
    }

}
