
// Import the required packges
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');      // used to understand the incoming data as request in json format
const routes = require('./Routes/index');
require('dotenv').config();

// Initialize the libraries
const app = express();


const host = "0.0.0.0"; 
const port = process.env.PORT || 3332;
app.use(bodyParser.json());


// Handle the CORS
app.use((req, res, next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
     next();
});

app.use('/api', routes);

// Connect to MongoDB
mongoose.connect(
     'mongodb+srv://zomato:MongoConnection@cluster0.votdq.mongodb.net/Zomato?retryWrites=true&w=majority',
     {
          useNewUrlParser: true,
          useUnifiedTopology: true
     }
).then(success => {
     console.log("Connected to MongoDB");
     // Start the server
     app.listen(port, () => {
          console.log(`The server is running on port:${port}`);
     });

}).catch(error => {
     console.log(error);
});

