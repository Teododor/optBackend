'use strict';
const models = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const equipmentNewJoiners = [];
    const equipments = await models.Equipment.findAll();
    const newJoiners = await models.NewJoiner.findAll();
    for (let i = 0; i < 100; i++) {
      const equipmentId = equipments[Math.floor(Math.random() * equipments.length)].id;
      const newJoinerId = newJoiners[Math.floor(Math.random() * newJoiners.length)].id;
      equipmentNewJoiners.push({
        equipmentId: equipmentId,
        newJoinerId: newJoinerId,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    await queryInterface.bulkInsert('EquipmentNewJoiners', equipmentNewJoiners, {});
  },
  async down (queryInterface, Sequelize) {
  }
};
