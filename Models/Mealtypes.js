// import the mongoose package
const mongoose = require('mongoose');

// create the schema of the mealtype data
const Schema = mongoose.Schema;

const MealTypeSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    meal_type:{
        type:Number,
        required:true
    }
    
});

// connect the schema with the MongoDB collection and export
module.exports = mongoose.model('MealTypeModel',MealTypeSchema,'MealType');    // ('nameOfTheModel','Schema','collectionName')