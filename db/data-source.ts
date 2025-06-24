/* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from 'typeorm';
import { ProductCategory } from '../src/productcategory/entities/productcategory.entity';
import { Product } from '../src/product/entities/product.entity';
import { User } from '../src/user/entities/user.entity';
import { Order } from 'src/order/entities/order.entity';


export const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    database: 'product_db',
    username: 'postgres',
    password: '123',
    port: 5432,
    entities: [ProductCategory, Product, User,Order, 'src/**/*.entity.js'],
    migrations: ['dist/db/migrations/*.js'],
    synchronize: false, // Garante que o TypeORM não altere o banco automaticamente
};

export default new DataSource(dataSourceOptions);