var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/user");
        }
        res.sendFile(path.join(__dirname, "../views/calendar.html"))// needs handlebars page
    });
}