import { dbconnection } from "../utility/dbconn.js";
import { customer } from "../models/customer.js";

export async function _delete(_id){
    try{
        const get_conn = await dbconnection();
        const _customer = get_conn.model("customer", customer);

        if(_id === undefined){
            return ;
        }
        return await _customer.findByIdAndDelete(_id);
    }
    catch(error){
        return ;
    }
};