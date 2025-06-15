import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity( {name: 'products'} )
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal')
  price: number;

  @Column()
  quantity: number;
}
