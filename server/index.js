var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/public/"));
app.use(bodyParser.json());

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
