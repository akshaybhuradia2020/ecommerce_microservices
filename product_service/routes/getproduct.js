import {Router} from 'express';

import { get_product_all, get_product_from_id} from '../middlewares/getproduct.js';
export const get_router = Router();


get_router.get("/get_product_id", [get_product_from_id], (req, res) =>{
    if((res.locals.data).length > 0){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }

});


get_router.get("/get_product_all", [get_product_all] ,(req, res) =>{
    if((res.locals.data).length > 0){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }
});
