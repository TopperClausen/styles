import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
import { Min } from 'class-validator';

@Entity()
export class Style extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column("text")
    name: string;

    @Column("text")
    description: string;

    @Column("int")
    @Min(0)
    price: number = 0;

    @Column({ type: "text", nullable: false })
    imageUrl: string;
}   
