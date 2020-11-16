import { Schema, Prop, SchemaFactory, } from "@nestjs/mongoose";

@Schema()
class SProducts {

    @Prop({
        type: String,
        default: 'not given',
    })
    name: string;
    @Prop({
        type: Number,
        default: 0,
    })
    unitPrice: number;
    @Prop({
        type: Number,
        default: 0,
    })
    stock: number;
    @Prop({
        type: String,
        default: 'not given',
    })
    rubro: number;
    @Prop({
        type: Date,
        default: Date.now(),
    })
    createdAt: Date;
}

export const ProductsSchema = SchemaFactory.createForClass(SProducts);