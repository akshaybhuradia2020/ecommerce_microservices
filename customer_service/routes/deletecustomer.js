import {Router} from 'express';

import { delete_customer_by_id} from "../middlewares/deletecustomer.js";
export const delete_router = Router();


delete_router.get("/delete_customer", [delete_customer_by_id], (req, res) =>{
    if(res.locals.data){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }

});