import {Schema} from "mongoose";


export const order = new Schema({
    order_despcription: {type: String, required: true},
    order_type: {type: String, required: true},
    order_pickup: {type: String, required: true},
    order_destination: {type: String, required: true},
    order_shipper: {type: String, required: true},
    order_weight: {type: String , required: true},
    order_delivered_to_customer: {type: Boolean, required: true},
    customer_id: {type: String, required: true},
    product_id: {type: String, required: true},
    order_quantity: {type: Number, required: true},
    order_date: {type: Date, required: true},
    order_delivered_date: {type: Date}
});