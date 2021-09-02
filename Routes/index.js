// need the router from the express

const express = require('express');
const router = express.Router();

// import the Controllers

const locationController = require('../Controllers/Locations');
const restaurantController = require('../Controllers/Restaurants');
const mealtypesController = require('../Controllers/Mealtypes');
const paymentController = require('../Controllers/Payment');
const userController = require('../Controllers/User');
const orderController = require('../Controllers/Orders');
const menuController = require('../Controllers/Menu');


// declare the routes

router.get('/getAllLocations', locationController.getAllLocations);
router.get('/getAllRestaurants', restaurantController.getALLRestaurants);
router.get('/getRestaurantsByLocation/:cityName', restaurantController.getRestaurantsByLocation);
router.get('/getRestaurantsById/:restaurantId', restaurantController.getRestaurantsById);
router.post('/filterRestaurants', restaurantController.filterRestaurants);
router.get('/getMealTypes', mealtypesController.getMealTypes);
router.post('/payment', paymentController.payment);
router.post('/paymentCallback', paymentController.paymentCallback);
router.post('/signUp', userController.signUp);
router.post('/login', userController.login);
router.post('/SaveOrderDetails', orderController.SaveOrderDetails);
router.post('/getOrdersByUserEmail', orderController.getOrdersByUserEmail);
router.get('/getMenuByRestaurant/:restaurantId',menuController.getMenuForRestaurant);

//export the router
module.exports = router;