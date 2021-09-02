// import the location model
const LocationModel = require('../Models/Locations');

// export the controller functionality
exports.getAllLocations = (req,res) => {

      LocationModel.find().then(result => {
           res.status(200).json({
               message: "Locations fetched",
               locations: result
           });
      }).catch(error => {
           res.status(500).json({
                message: "Error in DataBase",
                error: error
           });
      });

};