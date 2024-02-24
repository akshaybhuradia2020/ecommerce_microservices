import { express } from "express";
import {CONFIGURATION} from './utility/const.js';

const app = new express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send("product service check");
});

app.use('/api', );

app.listen(CONFIGURATION.HOST, CONFIGURATION.PORT, () =>{
    console.log("Product Service is Up and Running")
})


