import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductsSchema } from "./schema/products.schema";

@Module({
  imports: [MongooseModule.forFeature([
    {name: 'Products', schema: ProductsSchema},
  ])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
