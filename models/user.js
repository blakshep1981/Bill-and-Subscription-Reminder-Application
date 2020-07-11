module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    bills: DataTypes.INTEGER,
    subscription: DataTypes.STRING,
    funds: { type: DataTypes.STRING, allowNull: false },
  });
  return User;
};
