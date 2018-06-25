var express = require("express");
var app = express();
var restRouter = require('./routes/rest');
var mongoose = require("mongoose");

mongoose.connect("mongodb://harryzhou1103:zyy521@ds117711.mlab.com:17711/coj");

app.use("/api/v1", restRouter);

app.listen(3000, function() {
    console.log("App listening on Port 3000!");
})

