const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        min: [4, 'Too short, min is 4 character'],
        max: [32, 'Too long, max is 32 charecters']
    },
    email: {
        type: String, 
        min: [4, 'Too short, min is 4 character'],
        max: [32, 'too long, max is 32 charecter'],
        unique: true,
        lowercase: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4, 'Too short, min is 4 characters'],
        max:[32, 'too longh, max is 32 characters'],
        required: 'password is required'
    },
    rentals: [{type: Schema.Types.ObjectId, ref:'Rental'}]
});

module.exports = mongoose.model('User', userSchema);