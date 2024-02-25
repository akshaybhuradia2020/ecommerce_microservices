import {Router} from 'express';

import {add_order} from "../middlewares/addorder.js";
export const add_router = Router();


add_router.get("/add_order", [add_order], (req, res) =>{

    if(res.locals.data){
        res.statusCode(200).json({

        });
    }
    else{
        res.statusCode(200).json({

        });
    }
    
});
