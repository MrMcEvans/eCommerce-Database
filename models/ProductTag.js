const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refences: {
        model: 'product',
        key: 'key',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      refences: {
        model: 'tag',
        key: 'key',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
