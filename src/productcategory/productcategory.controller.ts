import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductcategoryService } from './productcategory.service';
import { CreateProductCategoryDto } from './dto/create-productcategory.dto';
import { UpdateProductCategoryDto } from './dto/update-productcategory.dto';

@Controller('productcategory')
export class ProductcategoryController {
  constructor(private readonly service: ProductcategoryService) {}

  @Post()
  create(@Body() dto: CreateProductCategoryDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductCategoryDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}