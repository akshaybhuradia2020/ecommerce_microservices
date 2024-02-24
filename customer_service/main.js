import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from './routes/addcustomer.js';
import {get_router} from './routes/getcustomer.js';
import {update_router} from './routes/updatecustomer.js';
import {delete_router} from './routes/deletecustomer.js';

const app = new express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("customer service check");
});

app.use(`/api${CONFIGURATION.VERSION}`, add_router);
app.use(`/api${CONFIGURATION.VERSION}`, get_router);
app.use(`/api${CONFIGURATION.VERSION}`, update_router);
app.use(`/api${CONFIGURATION.VERSION}`, delete_router);

app.listen(CONFIGURATION.HOST, CONFIGURATION.PORT, () =>{
    console.log("Customer Service is Up and Running")
})

