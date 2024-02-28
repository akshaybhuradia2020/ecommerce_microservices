import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from './routes/addproduct.js';
import {get_router} from './routes/getproduct.js';
import {update_router} from './routes/updateproduct.js';
import {delete_router} from './routes/deleteproduct.js';

import {_update} from "./crud_db_operation/updateproduct.js";


const app = new express();

app.use(express.json());

app.get(`/product`, (req, res) => {
    res.send("product service check");
});


import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: CONFIGURATION.MESSAGE_BROKER_CLIENTID,
  brokers: [`${CONFIGURATION.MESSAGE_BROKER_IP}:${CONFIGURATION.MESSAGE_BROKER_PORT}`],
});


const consumer = kafka.consumer({ groupId: 'order-group' });

await consumer.connect();
await consumer.subscribe({ topic: 'ecommerce'});

await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    const {product_id:_id, ..._data } = JSON.parse(message.value);
    await _update(_id, {order_quantity: -_data["order_quantity"]});
  },
});


app.use(`/product/api`, add_router);
app.use(`/product/api`, get_router);
app.use(`/product/api`, update_router);
app.use(`/product/api`, delete_router);

app.listen(CONFIGURATION.PORT, CONFIGURATION.HOST, () =>{
    console.log("Product Service is Up and Running")
});


