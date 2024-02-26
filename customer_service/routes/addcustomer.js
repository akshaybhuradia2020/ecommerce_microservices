import {Router} from 'express';
import {add_customer} from "../middlewares/addcustomer.js";
export const add_router = Router();

add_router.post("/add_customer", [add_customer], (req, res) =>{
    if(res.locals.data === true){
        res.status(201).json({
            "Message": "Customer is Added"
        })
    }
    else{
        res.status(500).json({
            "Message": "Customer Addition is Failed"
        });
    }

});