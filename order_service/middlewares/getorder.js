import {_get} from "../crud_db_operation/getorder.js";


export async function get_order_history(req, res, next){
    try{
        if(Object.keys(req.param).length === 0){
            res.locals.data = false;
        }
        else{
            res.locals.data = await _get(req.param["_id"], req.param["_order_status"]);
        }
        next();
    }
    catch(error){
        res.locals.data = false;
        next()
    }
}