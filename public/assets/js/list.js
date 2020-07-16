// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var list = {
  all: function(cb) {
    orm.all("subscriptions", function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).
module.exports = list;
