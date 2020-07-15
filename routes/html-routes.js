const path = require("path");

module.exports = function(app){
// Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    if (req.user) {
      res.render("index");    
    }
    res.render("index")    
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

  app.get("/subscription", function(req, res) {
    if (req.user) {
    }
     res.render("subscription");
  });
}
