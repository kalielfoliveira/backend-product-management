import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';

import { ProductModule } from './product/product.module';
import { ProductcategoryModule } from './productcategory/productcategory.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    ProductModule, 
    TypeOrmModule.forRoot(dataSourceOptions), ProductcategoryModule, UserModule, OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
