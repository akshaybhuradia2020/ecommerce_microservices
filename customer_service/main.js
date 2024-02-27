import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from './routes/addcustomer.js';
import {get_router} from './routes/getcustomer.js';
import {update_router} from './routes/updatecustomer.js';
import {delete_router} from './routes/deletecustomer.js';
import {login_router} from './routes/login.js';

const app = new express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("customer service check");
});

app.use(`/api`, login_router);
app.use(`/api`, add_router);
app.use(`/api`, get_router);
app.use(`/api`, update_router);
app.use(`/api`, delete_router);

app.listen(CONFIGURATION.PORT, CONFIGURATION.HOST, () =>{
    console.log("Customer Service is Up and Running")
})

