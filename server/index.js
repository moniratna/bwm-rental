const express = require('express');
const mongoose = require('mongoose');
const Rental = require('./models/rental');

require('dotenv').config()




const DB_URI = process.env.DB_URI
mongoose.connect(DB_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true}
    );

const app = express();

app.get('/rentals', (req,res)=>{
    res.send({'success':true});
})

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("im running");
})