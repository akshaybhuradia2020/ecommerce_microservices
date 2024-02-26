import {Router} from 'express';

import { update_product_by_id} from "../middlewares/updateproduct.js";
export const update_router = Router();


update_router.post("/update_product/:product_id", [update_product_by_id], (req, res) =>{
    if(res.locals.data){
        res.status(201).json({
            "Message": "Product Updated"
        });
    }
    else{
        res.status(500).json({
            "Message": "Product Update is Failed"
        });
    }

});
