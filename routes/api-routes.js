var db = require("../models");

module.exports = function (app) {
    console.log("post post sign up")
  app.post("/api/signup", function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    }).then(function() {
      res.redirect(307, "/api/login");

    }).catch(function(err){
        res.status(401).json(err)
    });
  });



};
