import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from '../user/entities/user.entity';
import { Product } from '../product/entities/product.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    const user = await this.userRepo.findOneBy({
      id: String(createOrderDto.userId),
    });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }

    const products = await this.productRepo.find({
      where: { id: In(createOrderDto.productIds) },
    });

    // 1. Crie o pedido sem produtos
    let order = this.orderRepo.create({
      user,
      status: createOrderDto.status,
    });
    order = await this.orderRepo.save(order);

    // 2. Associe os produtos e salve novamente
    order.products = products;
    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find({ relations: ['user', 'products'] });
  }

  findOne(id: number) {
    return this.orderRepo.findOne({
      where: { id },
      relations: ['user', 'products'],
    });
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    const order = await this.orderRepo.findOne({
      where: { id },
      relations: ['user', 'products'],
    });
    if (!order) {
      throw new Error('Pedido não encontrado');
    }

    if (updateOrderDto.userId) {
      const user = await this.userRepo.findOneBy({
        id: String(updateOrderDto.userId),
      });
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      order.user = user;
    }

    if (updateOrderDto.productIds) {
      const products = await this.productRepo.find({
        where: { id: In(updateOrderDto.productIds) },
      });
      order.products = products;
    }

    if (updateOrderDto.status) {
      order.status = updateOrderDto.status;
    }

    return this.orderRepo.save(order);
  }

  async remove(id: number) {
    await this.orderRepo.delete(id);
    return { deleted: true };
  }
}
