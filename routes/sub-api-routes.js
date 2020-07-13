var db = require("../models");

module.exports = function(app){
console.log("sub route api")
app.get("/api/bills",function(req,res){
    var query = {};
    if (req.query){
        query = req.query;
    }
    db.Subscription.findAll({
        where: query,
        include: [db.User],
    }).then(function(dbSub){
        res.json(dbSub)
    });
});

}