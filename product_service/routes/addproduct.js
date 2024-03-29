import {Router} from 'express';
import { verifyToken } from '../middlewares/auth.js';
import {add_product} from "../middlewares/addproduct.js";
export const add_router = Router();

add_router.post("/add_product", [verifyToken, add_product], (req, res) =>{
    if(res.locals.data === true){
        res.status(201).json({
            "message": "Product is Added"
        })
    }
    else{
        res.status(500).json({
            "message": "Product Failed"
        });
    }

});
