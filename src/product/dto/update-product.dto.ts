import { IsNotEmpty, 
         IsOptional,
         IsUUID,
         Min,
         IsNumber, 
         IsString, 
         IsBoolean} from 'class-validator';

export class UpdateProductDto {
  @IsUUID('4', { message: 'O campo ID deve ser um UUID válido' })
  @IsOptional()
  id?: string;
  
  @IsString({ message: 'O campo name deve ser do tipo string' })
  @IsNotEmpty({ message: 'O campo name é obrigatório' })
  name: string;

  @IsString({ message: 'O campo description deve ser do tipo string' })
    @IsNotEmpty({ message: 'O campo description é obrigatório' })
  description?: string;

  @IsNumber({}, { message: 'O campo price deve ser do tipo número' })
  @Min(0, { message: 'O campo price deve ser maior ou igual a zero' })
  price: number;

  @IsBoolean({ message: 'O campo favorite deve ser um booleano' })
  @IsOptional()
  favorite?: boolean;

  @IsBoolean({ message: 'O campo bought deve ser um booleano' })
  @IsOptional()
  bought?: boolean;
}
