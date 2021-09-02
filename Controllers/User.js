const User = require('../Models/User');
const UserModel = require('../Models/User');

// create a new user
exports.signUp = (req, res) => {
    const {
        email,
        password,
        firstName,
        lastName
    } = req.body;

    // create a new object of UserModel class 
    const userObj = new UserModel({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    })

    // we will call a save method on this object
    userObj.save().then(result => {
        res.status(200).json({
            message: "User Registered Successfully!!!",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in the DataBase",
            error :error
        });
    });
}



exports.login = (req, res) => {
// verify and login the user
    const {
        username,
        password
    } = req.body;

User/*collection name in MongoDB*/.find({
    email: username,
    password: password
}).then(result => {
    if(result.length > 0) {
        res.status(200).json({
            message: "User LoggedIn Successfully!!!",
            user: result[0],
            isLoggedIn: true 
        });
    }else {
        res.status(400).json({
            message: "Username or paasword is wrong!!!!",
            isLoggedIn: false
        });
    }
}).catch(error => {
    res.status(500).json({
        message: "error in the DataBase",
        error: error
    });
});

}