import { dbconnection } from "../utility/dbconn.js";
import { customer } from "../models/customer.js";



export async function _get(_id){
    try{
        const get_conn = await dbconnection();
        const _customer = get_conn.model("customer", customer);

        if(_id === undefined){
            return await _customer.find({});
        }
        else if(_id){
            return await _customer.findById(_id).exec();
        }
        else{
            return ;
        }
    }
    catch(error){
        return ;
    }
}