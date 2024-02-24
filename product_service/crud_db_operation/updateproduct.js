

import { dbconnection } from "../utility/dbconn.js";
import { product } from "../models/product.js";


export async function _update(_data, _id){
    try{
        const get_conn = await dbconnection();
        const _product = get_conn.model("product", product);

        if(_id === undefined || _data === undefined){
            return ;
        }
        return await _product.findByIdAndUpdate(_id, _data);
    }
    catch(error){
        return ;
    }
}


