const path = require("path");

//const calendar = require("../public/assets/js/calendar")

// path.get("/calendar", function(req, res) {
//     calendar.all(function(data) {
//         var handlebars = {
//             calendar:data
//         };
//         console.log(handlebars)
//         res.render("index", handlebars)
//     })
// })

// router.get("/", function(req, res) {
//     cat.all(function(data) {
//       var hbsObject = {
//         cats: data
//       };
//       console.log(hbsObject);
//       res.render("index", hbsObject);
//     });
//   });



module.exports = function(app){
    app.get("/", function(req, res){
        if(req.user){
            res.redirect("/user");
        }
        res.render("calendar")
        //res.sendFile(path.join(__dirname, "../views/layouts/main"))// needs handlebars page
    });
}