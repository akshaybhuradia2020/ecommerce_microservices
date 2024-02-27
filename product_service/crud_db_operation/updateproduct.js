

import { dbconnection } from "../utility/dbconn.js";
import { product } from "../models/product.js";


export async function _update(_id, _data){
    try{
        const get_conn = await dbconnection();
        const _product = get_conn.model("product", product);
        let get_stock_count = -1;
        if(_id == undefined || _data == undefined){
            return ;
        }
        if("product_stocks" in _data){
            get_stock_count = await _product.findById(_id);
            if(get_stock_count["product_stocks"] === 0 || get_stock_count["product_stocks"] < _data["product_stocks"]){
                return ;
            }
            _data["product_stocks"] = get_stock_count["product_stocks"] + (_data["product_stocks"] );
        }
        if("order_quantity" in _data){
            get_stock_count = await _product.findById(_id);
            if(get_stock_count["product_stocks"] === 0){
                return ;
            }
            _data["product_stocks"] = get_stock_count["product_stocks"] + (_data["order_quantity"] );
        }
        return await _product.findByIdAndUpdate(_id, _data);
    }
    catch(error){
        return ;
    }
}


