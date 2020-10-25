const bodyParser = require("body-parser");
const express = require("express");
const request = require("request");
const app = express();
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signUp.html")
    res.send();


});
app.listen(3000, function() {
    console.log("port is 3000");
})