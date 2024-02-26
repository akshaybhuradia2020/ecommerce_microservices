import { Kafka } from "kafkajs";
import {CONFIGURATION} from '../utility/const.js';



export class customer_kafka{
    constructor(){
        this._conn = new Kafka({
            clientId: CONFIGURATION.MESSAGE_BROKER_CLIENTID,
            brokers: [`${CONFIGURATION.MESSAGE_BROKER_IP}${CONFIGURATION.MESSAGE_BROKER_PORT}`]
        });
    }

    async connnect(){
        return await this._conn.connect();
    }
    async subscribe(_topic, _cursor){
        return await this._conn.subscribe({
            topic: _topic, fromBeginning: _cursor
        })
    }

    async publish(){
        return this._conn.producer();
    }


    async disconnect(){
        return await this._conn.disconnect();
    }
}