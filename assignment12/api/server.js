var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var { response } = require("express");

var urlEncodeBodyParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (req, res) {
  res.send("Welcome to my page");
  //   res.sendFile(__dirname + "/" + "index.html");
});
app
  .post("/process", urlEncodeBodyParser, function (req, res, next) {
    response = {
      first_data: req.body.first_number,
      second_data: req.body.second_number,
      operation: req.body.operation,
    };
    let a = parseFloat(response.first_data);
    let b = parseFloat(response.second_data);

    switch (response.operation) {
      case "+":
        let sum = a + b;
        res.send("Sum of two numbers is " + sum);
      case "-":
        let sub = a - b;
        res.send("Subtraction of two number is " + sub);
      case "*":
        res.send("Multilication of two number is " + a * b);
      default:
        res.send("Division of two number is " + a / b);
    }
  })
  .listen(8080);
