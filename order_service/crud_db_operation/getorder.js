import {dbconnection} from "../utility/dbconn.js";
import {order} from "../models/order.js";


export async function _get(_id, _order_status){
    try{
        const get_dbconn = await dbconnection();
        const _order = get_dbconn.model("order", order);

        // if(_id === undefined){
        //     return await _order.find({ order_status: _order_status}).exec();
        // }
        if(_id){
            return await _order.find({ customer_id: _id});
        }
        else{
            return ;
        }
    }
    catch(error){
        return ;
    }   
}