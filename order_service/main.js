import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from "./routes/addorder.js";
import {get_router} from "./routes/getorder.js";
import {update_router} from "./routes/updateorder.js";
const app = new express();

app.use(express.json());

app.get('/order', (req, res) => {
    res.send("order service check");
});

app.use(`/order/api`, add_router);
app.use(`/order/api`, get_router);
app.use(`/order/api`, update_router);

app.listen(CONFIGURATION.PORT, CONFIGURATION.HOST, () =>{
    console.log("Order Service is Up and Running")
});