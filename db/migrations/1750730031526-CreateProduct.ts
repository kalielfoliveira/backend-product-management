import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProduct1750730031526 implements MigrationInterface {
    name = 'CreateProduct1750730031526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_0dce9bc93c2d2c399982d04bef1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying, "price" numeric(10,2) NOT NULL, "favorite" boolean NOT NULL DEFAULT '0', "bought" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL DEFAULT 'user', CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_products_product" ("orderId" integer NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_59f5d41216418eba313ed3c7d7c" PRIMARY KEY ("orderId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1f9ea0b0e59e0d98ade4f2d5e9" ON "order_products_product" ("orderId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d6c66c08b9c7e84a1b657797df" ON "order_products_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "FK_1f9ea0b0e59e0d98ade4f2d5e99" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "order_products_product" ADD CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "FK_d6c66c08b9c7e84a1b657797dff"`);
        await queryRunner.query(`ALTER TABLE "order_products_product" DROP CONSTRAINT "FK_1f9ea0b0e59e0d98ade4f2d5e99"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d6c66c08b9c7e84a1b657797df"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_1f9ea0b0e59e0d98ade4f2d5e9"`);
        await queryRunner.query(`DROP TABLE "order_products_product"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_category"`);
    }

}
