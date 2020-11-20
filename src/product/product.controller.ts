import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Res, Body, Param, NotFoundException} from '@nestjs/common';

import { ProductService } from "./product.service";
import { CreateProductDTO } from './dto/products.dto';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) {}

    @Post()
    async postProduct(@Res() res, @Body() createProductDTO: CreateProductDTO ) {
        const newProduct = await this.productService.createOne(createProductDTO);
        return res.json({
            message: 'created',
            newProduct,
        });
    }

    @Get()
    async getProducts(@Res() res) {
        const allProducts = await this.productService.findAll();
        return res.json({
            message: 'received',
            allProducts,
        });
    }

    @Get(':id')
    async getProduct(@Res() res, @Param('id') param) {
        const theProduct = await this.productService.findOne(param);
        if(!theProduct) throw new NotFoundException('See the param sended on GET statement.');
        return res.json({
            message: 'received',
            theProduct,
        })
    }

    @Put(':id')
    async putProduct(@Res() res, @Param('id') param, @Body() createProductDTO: CreateProductDTO) {
        const updatedProduct = await this.productService.updateOne(param, createProductDTO);
        return res.json({
            message: 'completed',
            updatedProduct,
        })
    }

    @Delete(':id')
    async deleteProduct(@Res() res, @Param('id') param) {
        const deleteProduct = await this.productService.deleteOne(param);
        return res.json({
            message: 'completed',
            deleteProduct,
        })
    }

}
