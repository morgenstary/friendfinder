// Dependencies
var express = require("express");
var path = require("path");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Data
var friends = {
    "name":" ",
    "photo":" ",
    "scores":[
        
      ]
  }

// Routes

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
