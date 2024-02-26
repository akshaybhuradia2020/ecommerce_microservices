import { dbconnection } from "../utility/dbconn.js";
import { customer } from "../models/customer.js";

export async function _post(_data){
    try{
        const get_conn = await dbconnection();
        const _customer = get_conn.model("customer", customer);
        const get_customer_exist = await _customer.exists({customer_email: _data["customer_email"]});
        console.log(get_customer_exist);
        if (_data === undefined || _data === null || get_customer_exist != null){
            return ;

        }
        
        return await new _customer({
            customer_name: _data["customer_name"],
            customer_address: _data["customer_address"],
            customer_phone: _data["customer_phone"],
            customer_wallet: _data["customer_wallet"],
            customer_email: _data["customer_email"],
            customer_passwd: _data["customer_passwd"]
        }).save();
    }
    catch(error){
        return ;
    }
}