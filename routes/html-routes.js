const path = require("path");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app){
// Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    // If the user already has an account send them to the calendar page
    //console.log("above if block");
    if (req.user) {
      res.render("index");
    }
  //  console.log("below if block");
    res.render("index");
  });

  app.get("/calendar", function(req, res) {
    if (req.user) {
      res.render("calendar");
    }
    // res.render("calendar");
  });

  app.get("/list", function(req, res) {
    if (req.user) {
      var subs = {};
    
      db.Subscription.findAll({ //shmaybe the association of tables that doesnt give AUthorId=Author . id
          where: subs, raw: true//,
        //  include: [db.Subscription], //grabbing now from subdatabase
      }).then(function(dbSubs){
        
       // console.log("we go the data now lets move");
        // console.log(dbSubs)
        res.render("list",{dbSubs: dbSubs});
    
   
      });
    }


    // res.render("list");
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');

  });

  app.get("/signup", function(req, res) {
    if (req.user) {
        res.render("calendar")
    }
     res.render("signup");
  });

  app.get("/subscription", function(req, res) {
    if (req.user) {
      res.render("subscription");
    }
    //  res.redirect("/");
  });
  
}
