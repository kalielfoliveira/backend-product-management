import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Product } from '../../product/entities/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.id)
  user: User;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  status: string;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}