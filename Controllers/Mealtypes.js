// import the mealtype model
const MealTypeModel = require('../Models/Mealtypes');

// export the controller functionality
exports.getMealTypes = (req,res) => {
    MealTypeModel.find().then(result => {
        res.status(200).json({
            message: "Mealtypes fetched",
            mealtypes: result
        });
   }).catch(error => {
        res.status(500).json({
             message: "Error in DataBase",
             error: error
        });
   });
}