import {Router} from 'express';

import { get_customer_from_id, get_all_customer} from '../middlewares/getcustomer.js';
export const get_router = Router();


get_router.get("/get_customer_id/:customer_id", [get_customer_from_id], (req, res) =>{
    if(res.locals.data){
        res.status(200).json({
            "Result": [res.locals.data]
        });
    }
    else{
        res.status(500).json({
            "Result": []
        });
    }

});


get_router.get("/get_customer_all", [get_all_customer] ,(req, res) =>{
    if((res.locals.data).length > 0){
        res.status(200).json({
            "Result": res.locals.data
        });
    }
    else{
        res.status(500).json({
            "Result": []
        });
    }
});