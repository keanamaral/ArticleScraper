// ===============================================================================
// Step1: GET DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var express = require("express");
// Initialize Express
var app = express();
var path = require("path");
// ===============================================================================
// Step2: ROUTING
// Here we create server routes for different pages when loaded
// ===============================================================================
//// Home Page///////////////////////////////////////////////////////////////
app.get("/", function(req, res) {
	res.sendfile("public/views/html/index.html");
});
// Export html routes for server.js to use.
module.exports = app;