const express = require('express');
const mongoose = require('mongoose');
const Rental = require('./models/rental');
const rentalRoutes = require('./routes/rentals');
const FakeDb = require('./fakedb');


require('dotenv').config()




const DB_URI = process.env.DB_URI
mongoose.connect(DB_URI,
    {useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true}
    ).then(()=>{
        const fakeDb = new FakeDb();
        fakeDb.seedDb();
    });

const app = express();

app.use('/api/v1/rentals', rentalRoutes);

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("im running");
})