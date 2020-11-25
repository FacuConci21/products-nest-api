import { Module } from '@nestjs/common';
import { AppController } from "./app.controller";
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ProductModule, 
    ConfigModule.forRoot({ isGlobal: true, }),
    MongooseModule.forRoot('mongodb://localhost/products-db', 
      {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology:true}
      ),
    AuthModule,
    UsersModule,
    ],
  controllers: [AppController, ],
  providers: [AppService, ],
})
export class AppModule {}
