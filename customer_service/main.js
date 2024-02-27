import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from './routes/addcustomer.js';
import {get_router} from './routes/getcustomer.js';
import {update_router} from './routes/updatecustomer.js';
import {delete_router} from './routes/deletecustomer.js';
import {login_router} from './routes/login.js';

const app = new express();


app.use(express.json());

app.get('/customer', (req, res) => {
    res.send("customer service check");
});

app.use(`/customer/api`, login_router);
app.use(`/customer/api`, add_router);
app.use(`/customer/api`, get_router);
app.use(`/customer/api`, update_router);
app.use(`/customer/api`, delete_router);

app.listen(CONFIGURATION.PORT, CONFIGURATION.HOST, () =>{
    console.log("Customer Service is Up and Running")
})

