import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1750029872201 implements MigrationInterface {
    name = 'CreateProduct1750029872201'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" 
            ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
            "name" character varying NOT NULL, 
            "description" character varying, 
            "price" numeric NOT NULL, 
            "favorite" boolean NOT NULL DEFAULT false, 
            "bought" boolean NOT NULL DEFAULT false, 
            CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
