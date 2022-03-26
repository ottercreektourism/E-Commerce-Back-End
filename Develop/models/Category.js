const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // I think these below will automatically happen-- See ORM Day 1 39:40

      // PrimaryKey true tells sequelize to not create a primary key called id because
      // we already have one. good for if i wanted my id to be category_id, bc then it would create another for me called id.
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
