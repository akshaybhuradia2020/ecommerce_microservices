import {order} from "../models/order.js";
import {dbconnection} from "../utility/dbconn.js";


export async function _post(_data){
    try{
        const get_conn = await  dbconnection();
        const _order = get_conn.model("order", order);

        if(_data === undefined){
            return ;
        }

        return await new _order({
            order_despcription: _data["order_despcription"],
            order_type: _data["order_type"],
            order_pickup: _data["order_pickup"],
            order_destination: _data["order_destination"],
            order_shipper: _data["order_shipper"],
            order_weight: _data["order_weight"],
            order_delivered_to_customer: _data["order_delivered_to_customer"],
            customer_id: _data["customer_id"],
            product_id: _data["product_id"],
            order_quantity: _data["order_quantity"],
            order_date: _data["order_date"],
            order_delivered_date: _data["order_delivered_date"]


        }).save();
    }
    catch(error){
        return ;
    }   

}