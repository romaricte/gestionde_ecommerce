import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Nom du produit' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ description: 'Description du produit' })
  @IsString()
  description?: string;

  @ApiProperty({ description: 'Prix du produit' })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({ description: 'Quantité en stock' })
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({ description: 'SKU du produit' })
  @IsNotEmpty()
  @IsString()
  sku: string;

  @ApiProperty({ description: 'Catégorie du produit' })
  @IsNotEmpty()
  @IsString()
  category: string;
}