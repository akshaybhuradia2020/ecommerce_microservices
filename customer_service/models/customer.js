import {Schema} from "mongoose";


export const customer = new Schema({
    customer_name: {type: String, required: true},
    customer_address: {type: String, required: true},
    customer_phone: {type: String, required: true},
    customer_wallet: {type: Number, required: true}
});