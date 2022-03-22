const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      // I think these below will automatically happen-- See ORM Day 1 39:40
      
      // Doesn't allow null values.
      // Set as primary key.
      // Uses auto increment.

      // PrimaryKey true tells sequelize to not create q primary key called id because
      // we already have one. good for if i wanted my id to be category_id, bc then it would create another for me called id.
      PrimaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING
      // doesnt allow null values
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
