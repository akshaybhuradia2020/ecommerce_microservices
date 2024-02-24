import { dbconnection } from "../utility/dbconn.js";
import { product } from "../models/product.js";

export async function _delete(_id){
    try{
        const get_conn = await dbconnection();
        const _product = get_conn.model("product", product);

        if(_id === undefined){
            return ;
        }
        return await _product.findByIdAndDelete(_id);
    }
    catch(error){
        return ;
    }
}