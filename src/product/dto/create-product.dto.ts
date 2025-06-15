import { IsNotEmpty, 
         IsNumber, 
         IsString } from 'class-validator';

export class CreateProductDto {
  @IsString({ message: 'O campo name deve ser do tipo string' })
  @IsNotEmpty()
  name: string;

  @IsString({ message: 'O campo name deve ser do tipo string' })
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;
}
