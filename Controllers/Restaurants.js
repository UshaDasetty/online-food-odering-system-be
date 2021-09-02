// import the location model
const RestaurantModel = require('../Models/Restaurants');

// export the controller functionality
exports.getALLRestaurants = (req,res) => {

    RestaurantModel.find().then(result => {
            res.status(200).json({
                message: "Restaurants fetched",
                restaurants: result
            });
    }).catch(error => {
            res.status(500).json({
                message: "Error in DataBase",
                error: error
            });
    });

}

exports.getRestaurantsByLocation = (req,res) => {
    let cityName = req.params.cityName;
    
    RestaurantModel.find({city: cityName}).then(result => {
        res.status(200).json({
            message: `Restaurants fetched for city: ${cityName}`,
            restaurants: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in DataBase",
            error: error
            });
    });

}

exports.getRestaurantsById = (req,res) => {
    let restaurantId = req.params.restaurantId;
    
    RestaurantModel.find({_id: restaurantId}).then(result => {
        res.status(200).json({
            message: `Restaurants fetched for id: ${restaurantId}`,
            restaurants: result[0]
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in DataBase",
            error: error
            });
    });

}

exports.filterRestaurants = (req, res) => {
    const{
        mealtype, 
        location, 
        cuisine, 
        lcost, 
        hcost, 
        sort, 
        page = 1
        /*
           // Pagination:
               -> result array can have any number of arrays(may be 20, 15, 11, 16, 30,....)
               -> as per the design we only show 2 items per page
               -> e.g: if user passes page = 1, then we need to send index 0,1 of the result array
               -> if user passes page = 2, then we need to send index 2,3 of the result array
               -> if user passes page = 3, then we need to send index 4,5 of the result array and ......
               -> Assignment : to add the pagination logic
         */

    } = req.body;

    let filters = {};

    // add logic to apply filters

    if (mealtype) {
        filters. mealtype_id = mealtype;
    }

    if(location) {
        filters.location_id = location;
    }

    if(cuisine && cuisine.length > 0) {
        filters['cuisine.name'] = {
            $in: cuisine
        }
    }

    if(hcost && lcost) {
        if(lcost == 0){
        filters.min_price ={
            $lt: hcost    // lower than the high cost
        }
        }else{
        filters.min_price ={
        $gt: lcost,
        $lt: hcost
        }
        }
    }


    RestaurantModel.find(filters).sort({min_price: sort}).then(result => {

    
        const pageSize = 2;
        let tempArray = [];

        function paginate(arr, page_size, page_no) {
            let paginatedResult = [];

            paginatedResult = arr.slice( (page_no-1)*page_size, page_no*page_size );
            return paginatedResult;
        }
        tempArray = paginate(result, pageSize, page);

        res.status(200).json({
            message: "filtered Restaurants fetched",
            restaurants: tempArray,
            totalResultsCount: result,
            pageNo: page,
            pageSize: pageSize
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in DataBase",
            error: error
        });
    });    

}