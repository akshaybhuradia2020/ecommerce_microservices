import {dbconnection} from "../utility/dbconn.js";
import {order} from "../models/order.js";


export async function _update(_id, _order_status){
    try{
        const get_dbconn = await dbconnection();
        const _order = get_dbconn.model("order", order);

        if(_id === undefined){
            return ;
        }
        else if(_id){
            return await _order.findByIdAndUpdate(_id, {order_status: _order_status});
        }
        else{
            return ;
        }
    }
    catch(error){
        return ;
    }   
}