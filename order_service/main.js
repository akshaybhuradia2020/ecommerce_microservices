import express from "express";
import {Kafka} from 'kafkajs';

import {CONFIGURATION} from './utility/const.js';
import {add_router} from "./routes/addorder.js";
import {get_router} from "./routes/getorder.js";
import {update_router} from "./routes/updateorder.js";
const app = new express();

// const _order_kafka = new Kafka({
//     clientId: CONFIGURATION.MESSAGE_BROKER_CLIENTID,
//     brokers: [`${CONFIGURATION.MESSAGE_BROKER_IP}${CONFIGURATION.MESSAGE_BROKER_PORT}`]
// });

app.use(express.json());

app.get('/', (req, res) => {
    res.send("order service check");
});

app.use(`/api`, add_router);
app.use(`/api`, get_router);
app.use(`/api`, update_router);

app.listen(CONFIGURATION.PORT, CONFIGURATION.HOST, () =>{
    console.log("Order Service is Up and Running")
});