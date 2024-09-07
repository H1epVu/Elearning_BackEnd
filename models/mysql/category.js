const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Category = sequelize.define('category', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
}, {
    timestamps: false
});

module.exports = Category;