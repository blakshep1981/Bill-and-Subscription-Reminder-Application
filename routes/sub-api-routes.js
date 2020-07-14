var db = require("../models");

module.exports = function(app){
console.log("sub route api")
app.get("/api/bills",function(req,res){
    var subs = {};
    if (req.subs){
        subs = req.subs;
    }
    db.Subscription.findAll({
        where: subs,
        include: [db.User],
    }).then(function(dbSub){
        res.json(dbSub)
    });
});

}