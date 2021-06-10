const express = require('express');
const mongoose = require('mongoose');
const Rental = require('./models/rental');
const bodyParser = require('body-parser');

const rentalRoutes = require('./routes/rentals');
const userRoutes = require('./routes/users');
const bookingRoutes = require('./routes/bookings');

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
        // fakeDb.seedDb();
    });

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/bookings', bookingRoutes);

const PORT = 3001;

app.listen(PORT, ()=>{
    console.log("im running");
})