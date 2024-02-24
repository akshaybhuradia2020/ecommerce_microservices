import {Router} from 'express';

import { delete_product_by_id} from "../middlewares/deleteproduct.js";
export const delete_router = Router();


delete_router.get("/delete_product", [delete_product_by_id], (req, res) =>{
    if(res.locals.data){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }

});