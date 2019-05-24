import {MigrationInterface, QueryRunner} from "typeorm";

export class Test31558704839837 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textY"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textX"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textXY"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "title" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "text" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textY" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textX" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textXY" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "titleT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textYT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textXT" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textXYT" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textXYT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textXT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textYT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "titleT"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textXY"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textX"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "textY"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "text"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textXY" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textX" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "textY" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "text" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD "title" character varying`);
    }

}
