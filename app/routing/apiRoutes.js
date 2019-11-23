var express = require("express");
var path = require("path");
var fs = require("fs");

var PORT = 3000;
var app = express();

var friendList = require('../../server.js');

module.exports = function (app) {

    // app.get("/api/friends", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../data/friends.js"));
    // });

    app.get("/api/friends", function (req, res) {
        return res.json(friendList);
    })
}