import {Router} from 'express';
import {add_product} from "../middlewares/addproduct.js";
export const add_router = Router();

add_router.get("/add_product", [add_product], (req, res) =>{
    if(res.locals.data === true){
        res.statusCode(201).json({

        })
    }
    else{
        res.statusCode(500).json({

        });
    }

});
