
// import the mongoose package
const mongoose = require('mongoose');

// create the schema of the restaurants data
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
    amount:{
        type: number,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    mobileNo:{
        type: number,
        required: true
    }
    

});

// connect the schema with the MongoDB collection and export
module.exports = mongoose.model('PaytmChecksum',PaymentSchema,'Payment');

