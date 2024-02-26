import {Router} from 'express';

import { delete_product_by_id} from "../middlewares/deleteproduct.js";
export const delete_router = Router();


delete_router.post("/delete_product/:product_id", [delete_product_by_id], (req, res) =>{
    if(res.locals.data){
        res.status(200).json({
            "message": "Product is deleted"
        });
    }
    else{
        res.status(200).json({
            "message": "Product Deletion Failed"
        });
    }

});