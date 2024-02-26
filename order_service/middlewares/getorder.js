import {_get} from "../crud_db_operation/getorder.js";


export async function get_order_history(req, res, next){
    try{
        if(Object.keys(req.params).length === 0){
            res.locals.data = false;
        }
        else{
            res.locals.data = await _get(req.params["customer_id"]);
        }
        next();
    }
    catch(error){
        res.locals.data = false;
        next()
    }
}