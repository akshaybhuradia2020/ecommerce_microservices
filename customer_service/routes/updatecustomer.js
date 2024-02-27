import {Router} from 'express';

import { verifyToken } from '../middlewares/auth.js';
import { update_customer_by_id} from "../middlewares/updatecustomer.js";
export const update_router = Router();


update_router.post("/update_customer/:customer_id", [verifyToken, update_customer_by_id], (req, res) =>{
    if(res.locals.data){
        res.status(200).json({
            "Message": "Customer data is updated"
        });
    }
    else{
        res.status(500).json({
            "Message": "Customer data updation is failed"
        });
    }

});