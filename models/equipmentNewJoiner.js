'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class EquipmentNewJoiner extends Model {
    static associate(models) {
    }
  }
  EquipmentNewJoiner.init({
  }, {
    sequelize,
    modelName: 'EquipmentNewJoiner',
  });
  return EquipmentNewJoiner;
};
