const path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/user");
        }
        res.render("calendar")
        //res.sendFile(path.join(__dirname, "../views/layouts/main"))// needs handlebars page
    });

    app.get("/newsub", function(req, res){
        if(req.user){
            res.redirect("/user");
        }
        res.render("list")
    })
}