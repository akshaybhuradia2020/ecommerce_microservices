import {Router} from 'express';

import {get_order_history} from "../middlewares/getorder.js";
export const get_router = Router();


get_router.get("/get_customer_order/:customer_id", [get_order_history] ,(req, res) =>{
    if(res.locals.data){
        res.status(200).json({
            Result: res.locals.data
        });
    }
    else{
        res.status(500).json({
            Result: []
        });
    }
    
});