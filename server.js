// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Connect Mongo database
mongoose.connect("mongodb://localhost/HW_articlescraper_db");
var db = mongoose.connection;
// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 5000;
// Initialize Express
var app = express();
// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
//So we also give app ability to parse JSON string:
app.use(bodyParser.json());
//And we also give app ability to parse text:
app.use(bodyParser.text());
// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
var routes = require("./controllers/html-routes");
app.use("/", routes);

// Listen on port 5000
app.listen(PORT, function() {
  console.log("http://localhost:" + PORT);
});