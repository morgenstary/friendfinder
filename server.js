// Dependencies
var express = require("express");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Middleware to convert data from front end to JSON
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
