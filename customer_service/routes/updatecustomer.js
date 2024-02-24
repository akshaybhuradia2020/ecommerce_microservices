import {Router} from 'express';

import { update_customer_by_id} from "../middlewares/updatecustomer.js";
export const update_router = Router();


update_router.get("/update_customer", [update_customer_by_id], (req, res) =>{
    if(res.local.data){
        res.statusCode(201).json({

        });
    }
    else{
        res.statusCode(201).json({

        });
    }

});