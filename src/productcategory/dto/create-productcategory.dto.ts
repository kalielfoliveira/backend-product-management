export class CreateProductcategoryDto {}
import { IsString, IsOptional } from 'class-validator';

export class CreateProductCategoryDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;
}