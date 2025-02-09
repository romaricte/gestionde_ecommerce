import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'john@example.com', description: "Email de l'utilisateur" })
  @IsEmail({}, { message: 'Email invalide' })
  email: string;

  @ApiProperty({ example: 'password123', 
    description: "Mot de passe de l'utilisateur" })
  @IsString()
  @MinLength(6, { message: 'Le mot de passe doit contenir au moins 6 caractères' })
  password: string;

  @ApiProperty({ example: 'John', 
    description: "Prénom de l'utilisateur" })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', 
    description: "Nom de l'utilisateur" })
  @IsString()
  lastName: string;
}
