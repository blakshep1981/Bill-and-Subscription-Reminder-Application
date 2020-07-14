var db = require("../models");

module.exports = function (app) {
  console.log("post post sign up");

  app.get("/api/users", function (req, res) {
    db.User.findAll({ include: [db.Subscription] }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.get("api/users/:id", function (req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Post],
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/users/:id", function(req,res){
db.Author.create(req.body).then(function(dbUser){
  res.json(dbUser);
})
  })

  app.delete("/api/users/:id", function (req, res) {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (dbUser) {
      res.json(dbUser);
    });
  });
};
