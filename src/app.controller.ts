import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

import { ProductService } from './product/product.service';
import { CreateProductDto } from './product/dto/create-product.dto';
@Controller('products')
export class AppController {
  constructor(
    private readonly appService: AppService, private readonly productService: ProductService) {}


  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productService.findById(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: CreateProductDto) {
    return this.productService.update(id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
  return this.productService.findOne(id); // CERTO
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

}
