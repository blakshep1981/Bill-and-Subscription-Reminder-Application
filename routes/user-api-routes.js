var db = require("../models");

module.exports = function (app) {
    console.log("post post sign up")

  app.get("/api/users", function(req, res){
    db.User.findAll({include: [db.Subscription]}).then(function(dbUser){
      res.json(dbUser);
    })
  })

};
