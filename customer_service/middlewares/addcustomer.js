import {_post} from "../crud_db_operation/addcustomer.js";


export async function add_customer(req, res, next){
    try{
        const _data = await _post(req.body);
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