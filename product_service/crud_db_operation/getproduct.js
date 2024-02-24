
import { dbconnection } from "../utility/dbconn.js";
import { product } from "../models/product.js";


export async function _get(_id){
    try{
        const get_conn = await dbconnection();
        const _product = get_conn.model("product", product);

        if(_id === undefined){
            return await _product.find({});
        }
        else if(_id){
            return await _product.findById(_id)
        }
        else{
            return ;
        }
    }
    catch(error){
        return ;
    }
}