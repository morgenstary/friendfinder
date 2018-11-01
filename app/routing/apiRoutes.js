// DEPENDENCIES
var path = require("path");
var friends = require('../data/friends');

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });
  
    app.post("/api/friends", function(req, res) {
      var user = req.body;
      var bfScore = 1000;
      var bfIndex = -1;
      var userScore = user.scores;
      for (let i = 0; i < friends.length; i++) {
        var currentFriend = friends[i];
        var total = 0;
        for (let j = 0; j < currentFriend.scores.length; j++) {
          var score = currentFriend.scores[j];
          total += Math.abs(parseInt(score) - parseInt(userScore[j]));
        }
        if (total < bfScore) {
          bfScore = total;
          bfIndex = i;
        }
      }
      friends.push(user);
      res.json(friends[bfIndex]);
    });
  };