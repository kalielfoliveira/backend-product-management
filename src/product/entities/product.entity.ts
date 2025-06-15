import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity( {name: 'product'} )
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column({ default: 0 })
  favorite: boolean;

  @Column({ default: false })
  bought: boolean;

}
