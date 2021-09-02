const OrdersModel = require('../Models/Orders');

exports.SaveOrderDetails = (req, res) => {
    const {
        CustomerName,
        address,
        mobileNo,
        email,
        orderedItem,
        totalPrice
    } = req.body;

    const ordersObj = new OrdersModel({
        CustomerName: CustomerName,
        address: address,
        mobileNo: mobileNo, 
        email: email,
        orderedItem: orderedItem,
        totalPrice: totalPrice
    })

    ordersObj.save().then(result => {
        res.status(200).json({
            message: "Order Placed Successfully!!!",
            orderDetails: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in the DataBase",
            error :error
        });
    });
}

exports.getOrdersByUserEmail = (req, res) => {
    const {
        email
    } = req.body;

OrdersModel.find({
    email: email
}).then(result => {
    if(result.length > 0) {
        res.status(200).json({
            message: "Orders fetched for Customer email",
            order: result[0],
            Ordered: true 
        });
    }else {
        res.status(400).json({
            message: "Username or paasword is wrong!!!!",
            Ordered: false
        });
    }
}).catch(error => {
    res.status(500).json({
        message: "error in the DataBase",
        error: error
    });
});

 }