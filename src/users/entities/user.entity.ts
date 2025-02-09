import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({ description: "Identifiant unique de l'utilisateur" })
  id: string;

  @Column({ unique: true })
  @ApiProperty({ description: "Email de l'utilisateur" })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  @ApiProperty({ description: "Prénom de l'utilisateur" })
  firstName: string;

  @Column()
  @ApiProperty({ description: "Nom de l'utilisateur" })
  lastName: string;

  @CreateDateColumn()
  @ApiProperty({ description: 'Date de création du compte' })
  createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty({ description: 'Date de dernière mise à jour' })
  updatedAt: Date;
}