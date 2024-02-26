import {Router} from 'express';

import { get_all_product, get_product_from_id} from '../middlewares/getproduct.js';
export const get_router = Router();


get_router.get("/get_product_id/:product_id", [get_product_from_id], (req, res) =>{
    if(res.locals.data){
        res.status(200).json({
            "Result": [res.locals.data]
        });
    }
    else{
        res.status(500).json({
            "Result": []
        });
    }

});


get_router.get("/get_product_all", [get_all_product] ,(req, res) =>{
    if((res.locals.data).length > 0){
        res.status(200).json({
            "Result": res.locals.data
        });
    }
    else{
        res.status(500).json({
            "Result": []
        });
    }
});
