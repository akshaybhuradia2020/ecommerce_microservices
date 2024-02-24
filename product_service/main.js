import express from "express";
import {CONFIGURATION} from './utility/const.js';
import {add_router} from './routes/addproduct.js';
import {get_router} from './routes/getproduct.js';
import {update_router} from './routes/updateproduct.js';
import {delete_router} from './routes/deleteproduct.js';

const app = new express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("product service check");
});

app.use(`/api${CONFIGURATION.VERSION}`, add_router);
app.use(`/api${CONFIGURATION.VERSION}`, get_router);
app.use(`/api${CONFIGURATION.VERSION}`, update_router);
app.use(`/api${CONFIGURATION.VERSION}`, delete_router);

app.listen(CONFIGURATION.HOST, CONFIGURATION.PORT, () =>{
    console.log("Product Service is Up and Running")
})


