'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class NewJoiner extends Model {
    static associate(models) {
      models.NewJoiner.belongsToMany(models.Equipment, {
        through: models.EquipmentNewJoiner,
      });
    }
  }
  NewJoiner.init({
    lastName: DataTypes.STRING,
    firstName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NewJoiner',
  });
  return NewJoiner;
};
