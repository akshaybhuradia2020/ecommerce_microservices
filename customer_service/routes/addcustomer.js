import {Router} from 'express';
import {add_customer} from "../middlewares/addcustomer.js";
export const add_router = Router();

add_router.get("/add_customer", [add_customer], (req, res) =>{
    if(res.locals.data === true){
        res.statusCode(201).json({

        })
    }
    else{
        res.statusCode(500).json({

        });
    }

});