const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var result = num1 + num2;

    res.send("The result of your calculation is " + result);
});

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res) {

var weight = parseFloat(req.body.wei);
var height = parseFloat(req.body.hei);
var BMI = weight / (height*height);
    
    res.send("Your BMI is: " + BMI);
});

app.listen(3000, function() {
    console.log("server started at port 3000")
});