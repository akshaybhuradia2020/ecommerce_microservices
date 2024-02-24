import {Schema} from 'mongoose';

export const product = new Schema({
    product_name: { type: String, required: true, trim:true},
    product_despription: { type: String, required: true, trim:true},
    product_price: { type: Number, required: true},
    product_stocks: { type: Number, required: true},
})