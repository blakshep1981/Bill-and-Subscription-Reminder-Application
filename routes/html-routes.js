const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){
// Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    // If the user already has an account send them to the calendar page
    if (req.user) {
      res.render("signup");
    }
    res.render("index");
  });

  app.get("/calendar", function(req, res) {
    if (req.user) {
    }
    res.render("calendar");
  });

  app.get("/list", function(req, res) {
    if (req.user) {
    }
    res.render("list");
  });

  app.get("/signup", function(req, res) {
    if (req.user) {
    }
     res.render("signup");
  });

  app.get("/subscription", function(req, res) {
    if (req.user) {
    }
     res.render("subscription");
  });
  
}
