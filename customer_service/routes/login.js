import {Router} from 'express';
import jwt from 'jsonwebtoken';

import {CONFIGURATION} from '../utility/const.js'
import {_login} from "../middlewares/login.js";
export const login_router = Router();


login_router.post("/login", [_login], function(req, res, next){
    if(res.locals.login[0] === -1){
        res.status(401).json({message:"USER IS NOT EXIST", uservalid: false, token: null});
    }
    else if(res.locals.login[0] === 0){
        res.status(401).json({message:"USER CREDENTIAL IS WRONG", uservalid: false, token: null});
    }
    else if(res.locals.login[0] === 1){
        const token = jwt.sign({username: req.query["username"]}, CONFIGURATION.KEY, { expiresIn: CONFIGURATION.TOKEN_TIME});
        res.status(200).json({message:"CORRECT CREDENTIALS", uservalid: true, 
            token: token, userid: res.locals.login[1]});
    }
    else{
        res.status(500).json({message: "SOMETHING WENT WRONG"});
    }
});