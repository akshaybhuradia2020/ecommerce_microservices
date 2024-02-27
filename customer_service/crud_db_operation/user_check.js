import {dbconnection} from "../utility/dbconn.js";
import {customer} from "../models/customer.js";

export async function user_is_valid_or_not(_data){
    try {
        const get_conn = await dbconnection();
        const _customer = get_conn.model('customer', customer);

        if ((await _customer.exists({customer_email: _data["username"]})) === null){
            return [-1, null];
        }
        else if((await _customer.exists({customer_email: _data["username"], 
        customer_passwd: _data["passwd"]}))){
            let _get_userid = await _customer.
            findOne({customer_email: _data["username"], customer_passwd: _data["passwd"]});
            return [1, _get_userid["_id"]];
        }
        else{
            return [0, null];
        }
    }
    catch(error){
        return ;
    }
}
