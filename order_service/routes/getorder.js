import {Router} from 'express';

import {get_order_history} from "../middlewares/getorder.js";
export const get_router = Router();


get_router.post("/get_order", [get_order_history] ,(req, res) =>{
    if(res.locals.data){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }
    
});