import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddPhotoToUser1750776911219 implements MigrationInterface {
  name = 'AddPhotoToUser1750776911219';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'user',
      new TableColumn({
        name: 'photo',
        type: 'varchar',
        isNullable: true,
      }),
    );
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "favorite" SET DEFAULT '0'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "product" ALTER COLUMN "favorite" SET DEFAULT false`,
    );
    await queryRunner.dropColumn('user', 'photo');
  }
}
