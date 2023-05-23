'use strict';
const { 
  randProductName,
  randProductDescription, 
  randAmount
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mockEquipments = [];
    for(let i = 0; i < 100; i++) {
      mockEquipments.push({
        name: randProductName(),
        specifications: randProductDescription(),
        quantity: parseInt(randAmount()),
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert('Equipment', mockEquipments, {});
  },
  async down (queryInterface, Sequelize) {
  }
};
