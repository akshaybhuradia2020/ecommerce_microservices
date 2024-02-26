import { Kafka } from "kafkajs";
import {CONFIGURATION} from '../utility/const.js';



export class order_kafka{
    constructor(){
        this._conn = new Kafka({
            clientId: CONFIGURATION.MESSAGE_BROKER_CLIENTID,
            brokers: [`${CONFIGURATION.MESSAGE_BROKER_IP}${CONFIGURATION.MESSAGE_BROKER_PORT}`]
        });
    }

    async _connnect(){
        return await this._conn.connect();
    }
    async _subscribe(_topic, _cursor){
        return await this._conn.subscribe({
            topic: _topic, fromBeginning: _cursor
        })
    }

    async _publish(){
        return this._conn.producer();
    }


    async _disconnect(){
        return await this._conn.disconnect();
    }
};



// await consumer.run({
//     eachMessage: async ({ topic, partition, message }) => {
//       console.log({
//         value: JSON.parse(message.value),
//       })
//     },
//   });

// await producer.send({
//     topic: 'quickstart-events',
//     messages: [
//       { value: JSON.stringify([{
//         "_id": "65dc96c048806dad9e429f6c",
//         "order_despcription": "tv",
//         "order_type": "electronics",
//         "order_pickup": "Gurgoan",
//         "order_destination": "Delhi",
//         "order_shipper": "DLX",
//         "order_weight": "1",
//         "order_delivered_to_customer": false,
//         "customer_id": "65dc8ee986f613732c94d8dd",
//         "product_id": "65dc4ccf87f9a3fd2c8065d1",
//         "__v": 0
//       }])},
//     ],
//   });