import { PartialType } from '@nestjs/mapped-types';
import { CreateProductCategoryDto } from './create-productcategory.dto';

export class UpdateProductCategoryDto extends PartialType(CreateProductCategoryDto) {}