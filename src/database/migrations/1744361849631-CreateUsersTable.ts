import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1744361849631 implements MigrationInterface {
    name = 'CreateUsersTable1744361849631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "age" integer, "should_show_age" boolean NOT NULL DEFAULT false, "gender" character varying, "should_show_gender" boolean NOT NULL DEFAULT false, "sexual_orientation" character varying, "should_show_sexual_orientation" boolean NOT NULL DEFAULT false, "interests" character varying, "looking_for" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "public"."IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
