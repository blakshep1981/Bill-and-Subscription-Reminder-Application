var db = require("../models");

module.exports = function(app){
console.log("sub route api")

app.get("/api/subs",function(req,res){
   
    var subs = {};
    //console.log(req.subs)
    if (req.subs.subs_id){
        console.log(req.subs)
        subs.name = req.subs.subs_id;
    }
    db.Subscription.findAll({ //shmaybe the association of tables that doesnt give AUthorId=Author . id
        where: subs//,
      //  include: [db.Subscription], //grabbing now from subdatabase
    }).then(function(dbSubs){
        res.json(dbSubs)
       // console.log("dummy data")
        res.render('list', {res: dbSubs});
    });
});


app.get("/api/subs/:id", function(req,res){
    db.Subscription.findOne({
        where: {
            id: req.params.id
        },
        include: [db.User]
    }).then(function(dbSubs){
        res.json(dbSubs)
    });
});

app.post("/api/subs",function(req, res){
    db.Subscription.create(req.body).then(function(dbSubs){
        res.json(dbSubs);
    });
});

app.delete("/api/subs",function(req,res){
    db.Subscription.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbSubs){
            res.json(dbSubs);
        });
});

app.put("/api/subs",function(req,res){
    db.Subscription.update(
        req.body,
        {
            where: {
                id: req.body.id
            }
        }).then(function(dbSubs){
            res.json(dbSubs)
        })
})

}