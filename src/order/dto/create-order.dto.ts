import { IsNumber, IsString, IsArray } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  userId: number;

  @IsString()
  status: string;

  @IsArray()
   productIds: string[];
}