const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrdersSchema = new Schema({
    CustomerName:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    mobileNo:{
        type: Number,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    orderedItem:{
        type: String,
        required: true
    },

    totalPrice:{
        type: Number,
        required: true
    }


});

module.exports = mongoose.model('OrdersModel',OrdersSchema,'Orders');