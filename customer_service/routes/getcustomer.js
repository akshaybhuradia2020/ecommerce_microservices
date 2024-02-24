import {Router} from 'express';

import { get_customer_from_id, get_all_customer} from '../middlewares/getcustomer.js';
export const get_router = Router();


get_router.get("/get_customer_id", [get_customer_from_id], (req, res) =>{
    if((res.locals.data).length > 0){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }

});


get_router.get("/get_customer_all", [get_all_customer] ,(req, res) =>{
    if((res.locals.data).length > 0){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }
});