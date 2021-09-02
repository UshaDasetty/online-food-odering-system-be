const MenuModel = require('../Models/Menu')

exports.getMenuForRestaurant = (req, res) => {
    const restId = req.params.restaurantId;
    MenuModel.find({restaurantId: restId}).then(result => {
        res.status(200).json({
            message: `Menu for Restaurant ID ${restId}`,
            menu: result
        })
    }).catch(error => {
        res.status(500).json({
            message: "Error in the DataBase",
            error: error
        })
    });

}