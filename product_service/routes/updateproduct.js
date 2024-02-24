import {Router} from 'express';

import { update_product_by_id} from "../middlewares/updateproduct.js";
export const update_router = Router();


update_router.get("/update_product", [update_product_by_id], (req, res) =>{
    if(res.local.data){
        res.statusCode(201).json({

        });
    }
    else{
        res.statusCode(201).json({

        });
    }

});
