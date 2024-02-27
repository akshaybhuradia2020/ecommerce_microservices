import {Router} from 'express';

import { verifyToken } from '../middlewares/auth.js';
import {update_order_status} from "../middlewares/updateorder.js";
export const update_router = Router();


update_router.post("/change_order_status", [verifyToken, update_order_status], (req, res) =>{

    if(res.locals.data){
        res.status(200).json({

        });
    }
    else{
        res.status(200).json({

        });
    }
    
});
