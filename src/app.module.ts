import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import configuration from "../config/configuration";

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRoot(process.env.URI, 
      {useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology:true}
      ),
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
