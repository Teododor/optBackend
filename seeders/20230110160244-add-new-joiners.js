'use strict';
const { 
  randFirstName,
  randLastName, 
  randRecentDate,
  randProductName
} = require('@ngneat/falso');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const mockJoiners = [];
    for(let i = 0; i < 100; i++) {
      mockJoiners.push({
        firstName: randFirstName(),
        lastName: randLastName(),
        startDate: randRecentDate(),
        project: randProductName(),
        done: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryInterface.bulkInsert('NewJoiners', mockJoiners, {});
  },
  async down (queryInterface, Sequelize) {
  }
};
