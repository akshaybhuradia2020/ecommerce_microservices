import {_delete} from "../crud_db_operation/deletecustomer.js";


export async function delete_customer_by_id(req, res, next){
    try{
        const _data = await _post(req.param["_id"]);
        if(_data === undefined){
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