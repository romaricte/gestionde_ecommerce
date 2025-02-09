import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('products')
export class Product {
    @ApiProperty({ description: 'Identifiant unique du produit' })
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ApiProperty({ description: 'Nom du produit' })
    @Column({ length: 100 })
    name: string;

    @ApiProperty({ description: 'Description du produit' })
    @Column({ type: 'text', nullable: true })
    description: string;

    @ApiProperty({ description: 'Prix du produit' })
    @Column({ type: 'decimal', precision: 10, scale: 2 })
    price: number;

    @ApiProperty({ description: 'Quantité en stock' })
    @Column({ type: 'int', default: 0 })
    stock: number;

    @ApiProperty({ description: 'SKU (Stock Keeping Unit) du produit' })
    @Column({ length: 50, unique: true })
    sku: string;

    @ApiProperty({ description: 'Catégorie du produit' })
    @Column({ length: 50 })
    category: string;

    @ApiProperty({ description: 'Date de création' })
    @CreateDateColumn()
    createdAt: Date;

    @ApiProperty({ description: 'Date de dernière modification' })
    @UpdateDateColumn()
    updatedAt: Date;
}