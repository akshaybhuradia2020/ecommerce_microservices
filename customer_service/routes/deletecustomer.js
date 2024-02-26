import {Router} from 'express';

import { delete_customer_by_id} from "../middlewares/deletecustomer.js";
export const delete_router = Router();


delete_router.post("/delete_customer/:customer_id", [delete_customer_by_id], (req, res) =>{
    if(res.locals.data){
        res.status(200).json({
            "Message": "Customer is deleted"
        });
    }
    else{
        res.status(500).json({
            "Message": "Customer deletion is Failed"
        });
    }

});