var mongoose = require("mongoose");

var ActivitySchema = new mongoose.Schema({
    message: {type: String}
}, {timestamps: true });

var GameSchema = new mongoose.Schema({
    gold: Number,
    username: String,
    activities: [ActivitySchema]
}, {timestamps: true });

mongoose.model("Activity", ActivitySchema);
mongoose.model("Game", GameSchema);