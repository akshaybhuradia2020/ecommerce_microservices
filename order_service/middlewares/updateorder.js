import {_update} from "../crud_db_operation/updateorder.js";


export async function update_order_status(req, res, next){
    try{
        const _data = await _update(req.params["order_id"], req.body);
        if(_data == undefined){
            res.locals.data = false;
        }
        else{
            res.locals.data =true;
        }
        next();
    }
    catch(error){
        res.locals.data = false;
        next()
    }
}