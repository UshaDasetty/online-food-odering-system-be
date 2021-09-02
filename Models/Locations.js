// import the mongoose package
const mongoose = require('mongoose');

// create the schema of the locations data
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    city_id:{
        type:Number,
        required:true
    },
    location_id:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country_name:{
        type:String,
        required:true
    }

});

// connect the schema with the MongoDB collection and export
module.exports = mongoose.model('LocationModel',LocationSchema,'location');    // ('nameOfTheModel','Schema','collectionName')