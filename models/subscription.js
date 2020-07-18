module.exports= function(sequelize, DataTypes) {
    const Subscription = sequelize.define("Subscription", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false
      }
    });
    Subscription.associate = function(models) {
    // We're saying that a Subscription should belong to a User 
    // A Subscription can't be created without a User due to the foreign key constraint
    Subscription.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return Subscription;
};
//because ive tried to change my sequelize table from DATE to DATEONLY where it would only get me the date and no the 