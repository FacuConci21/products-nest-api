import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { Res, Req, HttpStatus, Body, } from '@nestjs/common';
import { CreateProductDTO } from './dto/products.dto';

@Controller('product')
export class ProductController {

    @Post('create')
    postProduct(@Res() res, @Body() createProductDTO: CreateProductDTO ) {
        console.log(createProductDTO);
        return res.json({
            message: 'created',
        });
    }

    @Get()
    getProducts(@Res() res, @Req() req) {
        return res.json({
            message: 'received',
        });
    }

}
