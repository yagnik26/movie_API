const express = require('express');
const connect = require('./config/db');
const router = require('./routes/router');
const cors = require('cors');
require('dotenv').config();
let app = express();
app.use(express.urlencoded({ extended : true }));
app.use(cors());
app.use(express.json());
app.use(express.static('./view'));
app.use('/' , router);

app.get('/list' , (req , res) => {
    res.sendFile(__dirname + '/view/post.html');
})

app.listen(8000,()=>{
    console.log("8000");
    connect();
})