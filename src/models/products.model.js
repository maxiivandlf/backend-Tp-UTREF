const { DataTypes } = require('sequelize');

const { sequelize } = require('../config/dbConfig');

const Products = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  img: {
    type: DataTypes.CHAR,
    allowNull: false,
  },
  nameProduct: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = Products;
