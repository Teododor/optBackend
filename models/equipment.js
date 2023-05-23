'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    static associate(models) {
      models.Equipment.belongsToMany(models.NewJoiner, {
        through: models.EquipmentNewJoiner,
      });
    }
  }
  Equipment.init({
    name: DataTypes.STRING,
    specifications: DataTypes.STRING,
    quantity: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'Equipment',
  });
  return Equipment;
};
