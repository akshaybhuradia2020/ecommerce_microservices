import {dbconnection} from "../utility/dbconn.js";
import {order} from "../models/order.js";


export async function _update(_id, _data){
    try{
        const get_dbconn = await dbconnection();
        const _order = get_dbconn.model("order", order);

        if(_id === undefined){
            return ;
        }
        else if(_id){
            return await _order.findByIdAndUpdate(_id, _data);
        }
        else{
            return ;
        }
    }
    catch(error){
        return ;
    }   
}