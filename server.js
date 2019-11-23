var express = require("express");
var $ = require("jquery");
var path = require("path");
var fs = require("fs");


var PORT = 3000;
var app = express();

var friendsList = require('./app/data/friends.js');


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);


app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    friendsList.push(newFriend);
    return res.json(friendsList);
})