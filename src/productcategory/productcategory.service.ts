import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productcategory.entity';
import { CreateProductCategoryDto } from './dto/create-productcategory.dto';
import { UpdateProductCategoryDto } from './dto/update-productcategory.dto';

@Injectable()
export class ProductcategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private repo: Repository<ProductCategory>,
  ) {}

  create(dto: CreateProductCategoryDto) {
    const category = this.repo.create(dto);
    return this.repo.save(category);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateProductCategoryDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}