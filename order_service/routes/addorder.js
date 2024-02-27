import {Router} from 'express';

import {add_order} from "../middlewares/addorder.js";
import { verifyToken } from '../middlewares/auth.js';
import { CONFIGURATION } from '../utility/const.js';
import {Kafka} from 'kafkajs';

export const add_router = Router();

const _order_kafka = new Kafka({
    clientId: CONFIGURATION.MESSAGE_BROKER_CLIENTID,
    brokers: [`${CONFIGURATION.MESSAGE_BROKER_IP}:${CONFIGURATION.MESSAGE_BROKER_PORT}`]
});
const _producer = _order_kafka.producer();
add_router.post("/add_order", [verifyToken, add_order], async (req, res) =>{

    if(res.locals.data){

        await _producer.connect();

        await _producer.send({topic: 'quickstart-events', messages: [{ value: JSON.stringify(res.locals.data)}]});
        await _producer.disconnect();
        
        res.status(200).json({
            "Message": "Order is palced"
        });
    }
    else{
        res.status(500).json({
            "Message": "Error in placing in order"
        });
    }
    
});
