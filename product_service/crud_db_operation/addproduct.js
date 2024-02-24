import { dbconnection } from "../utility/dbconn.js";
import { product } from "../models/product.js";

export async function _post(_data){
    try{
        const get_conn = await dbconnection();
        const _product = get_conn.model("product", product);

        if (_data === undefined || _data === null){
            return ;

        }
        return await new _product({
            product_name: _data["product_name"],
            product_price: _data["product_price"],
            product_stocks: _data["product_stocks"],
            product_despription: _data["product_despription"]
        }).save();
    }
    catch(error){
        return ;
    }
}