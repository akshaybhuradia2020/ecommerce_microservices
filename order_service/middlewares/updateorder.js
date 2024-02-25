import {_update} from "../crud_db_operation/updateorder.js";


export async function update_order_status(req, res, next){
    try{
        if(Object.keys(req.param).length === 0){
            res.locals.data = false;
        }
        else{
            res.locals.data = await _update(req.param["_id"], req.param["_order_status"]);
            res.locals.data =true;
        }
        next();
    }
    catch(error){
        res.locals.data = false;
        next()
    }
}