import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';

import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions), ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
