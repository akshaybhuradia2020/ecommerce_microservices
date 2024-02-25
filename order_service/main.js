import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from "./routes/addorder.js";
import {get_router} from "./routes/getorder.js";
import {update_router} from "./routes/updateorder.js";
const app = new express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("order service check");
});

app.use(`/api/${CONFIGURATION.VERSION}`, add_router);
app.use(`/api/${CONFIGURATION.VERSION}`, get_router);
app.use(`/api/${CONFIGURATION.VERSION}`, update_router);

app.listen(CONFIGURATION.HOST, CONFIGURATION.PORT, () =>{
    console.log("Order Service is Up and Running")
});