import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductcategoryService } from './productcategory.service';
import { ProductcategoryController } from './productcategory.controller';
import { ProductCategory } from './entities/productcategory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategory])],
  controllers: [ProductcategoryController],
  providers: [ProductcategoryService],
})
export class ProductcategoryModule {}