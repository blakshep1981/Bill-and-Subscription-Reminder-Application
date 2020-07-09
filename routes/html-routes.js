var path = require("path");

module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/user");
        }
        res.sendFile(path.join(__dirname, "../public/...html/handlebars"))// needs handlebars page
    });
}