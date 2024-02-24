import { dbconnection } from "../utility/dbconn.js";
import { customer } from "../models/customer.js";


export async function _update(_data, _id){
    try{
        const get_conn = await dbconnection();
        const _customer = get_conn.model("customer", customer);

        if(_id === undefined || _data === undefined){
            return ;
        }
        return await _customer.findByIdAndUpdate(_id, _data);
    }
    catch(error){
        return ;
    }
}

