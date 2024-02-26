import {_update} from "../crud_db_operation/updateproduct.js";


export async function update_product_by_id(req, res, next){
    try{
        const _data = await _update(req.params["product_id"], req.body);
        if(_data == undefined){
            res.locals.data = false;
        }
        else{
            res.locals.data =true;
        }
        next()
    }
    catch(error){
        res.locals.data = false;
        next();
    }
}