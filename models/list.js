module.exports = function(sequelize, DataTypes) {
    const List = sequelize.define("List",{
        list:{
            type: DataTypes.STRING,
            allowNull: false
        }
        //needs more stuff for the list
        
    })
    return List;
}