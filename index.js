const express = require('express');
const connect = require('./config/db');
const router = require('./routes/router');
require('dotenv').config();

let app = express();
app.use(express.json());

app.use('/' , router);

app.listen(process.env.port,()=>{
    console.log("8000");
    connect();
})