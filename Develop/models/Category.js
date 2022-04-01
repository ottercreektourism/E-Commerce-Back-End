const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    // freezetablename makes it so Category doesnt automatically pluralize
    freezeTableName: true,
    // underscored makes it so that all the column names arent camel case so it can be stored in the db.
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
