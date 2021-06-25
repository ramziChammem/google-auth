const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../react-client/public/"));
app.use(bodyParser.json());
require("dotenv").config();

// DB connection
require("./database/connection");

app.listen(3000, function () {
  console.log("listening on port 3000!");
});
