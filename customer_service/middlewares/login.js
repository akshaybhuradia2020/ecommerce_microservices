import {user_is_valid_or_not} from "../crud_db_operation/user_check.js";


export async function _login(req, res, next){
    try {
        let _data =  await user_is_valid_or_not(req.query);
        res.locals.login = _data;
        next();
    }
    catch(error){
        res.locals.login = undefined;
        next()
    }
};