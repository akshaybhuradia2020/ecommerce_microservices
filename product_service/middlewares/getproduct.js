import {_get} from "../crud_db_operation/getproduct.js"
/***
 * this function get products based on id param from system.
 */
export async function get_all_product(req, res, next){
    try{
        const _data = await _get();
        if(_data == undefined){
            res.locals.data = false;
            next();
        }
        else{
            res.locals.data = _data;
            next();
        }
    }
    catch(error){
        res.locals.data = false;
        next();
    }
}

/***
 * this function get all products from system.
 */

export async function get_product_from_id(req, res, next){
    try{
        const _data = await _get(req.params["product_id"]);
        if(_data == undefined){
            res.locals.data = false;
            next();
        }
        else{
            res.locals.data = _data;
            next();
        }
    }
    catch(error){
        res.locals.data = false;
        next();
    }
}