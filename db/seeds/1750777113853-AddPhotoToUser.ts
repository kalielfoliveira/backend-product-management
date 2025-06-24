import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddPhotoToUser1750900000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Adiciona a coluna photo se não existir
    await queryRunner.query(`
            ALTER TABLE "user" ADD COLUMN IF NOT EXISTS "photo" varchar;
        `);

    //atualiza a foto de um usuário específico (ajuste o id conforme necessário)
    await queryRunner.query(`
            UPDATE "user" SET "photo" = 'exemplo-foto.png' WHERE "email" = 'oliver.nakamura@hotmail.com';
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Remove a coluna photo
    await queryRunner.query(`
            ALTER TABLE "user" DROP COLUMN IF EXISTS "photo";
        `);
  }
}
