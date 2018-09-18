const mongoose = require("mongoose");
var Activity = mongoose.model("Activity");
var Game = mongoose.model("Game");

module.exports = {
    all: function(req, res) {
        Game.findOne({username: username}, function (err, game) {
            if (err) {
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({game});
            }
        })
    },

    start: function(req, res) {
        var username = req.body.username;
        var game = new Game({gold: 0, username: username, activities: []});

        game.save(function(err) {
            if (err) {
                res.json({error: err});
            }
            else {
                res.json({game});
            }
        })
    },

    find: function (req, res) {
        var username = req.body.username;
        var message = req.body.message;

        var activity = new Activity({message: message})
        Game.findOne({username: username}, function (err, game) {
            if (err) {
                res.json({message: "Error", error: err});
            }
            else {
                game.activities.push(activity);
                game.save();
                res.json({game});
            }
        })
    }
}