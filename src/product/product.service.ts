import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel, } from "@nestjs/mongoose";

import { CreateProductDTO } from "./dto/products.dto";
import { IProduct } from "./interfaces/products.interface";

@Injectable()
export class ProductService {

    constructor(@InjectModel('Products') private productModel: Model<IProduct>) {}

    async findAll(): Promise<IProduct[]>{
        const products = await this.productModel.find();
        return products;
    }

    async findOne(_id: string): Promise<IProduct>{
        const product = await this.productModel.findById({ _id });
        return product;
    }

    async createOne(productDto: CreateProductDTO): Promise<IProduct> {
        const newProduct = new this.productModel(productDto);
        await newProduct.save();
        return newProduct;
    }

    async updateOne(_id: string, productDto: CreateProductDTO): Promise<IProduct>{
        return await this.productModel.findByIdAndUpdate(_id, productDto, { new: true, });
    }

    async deleteOne(_id: string): Promise<IProduct> {
        return await this.productModel.findByIdAndDelete({ _id });
    }
}
