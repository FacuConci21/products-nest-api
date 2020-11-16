import { Document } from "mongoose";

export interface IProduct extends Document {
    name: string;
    unitPrice: number;
    stock: number;
    rubro: string;
    createdAt: Date;
}
