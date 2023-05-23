'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // crearea tabelului Equipment
    await queryInterface.createTable('Equipment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      specifications: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // crearea tabelului NewJoiner
    await queryInterface.createTable('NewJoiners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.DATE
      },
      project: {
        type: Sequelize.STRING
      },
      done: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // crearea tabelului de legatura EquipmentNewJoiners
    await queryInterface.createTable('EquipmentNewJoiners', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      equipmentId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Equipment',
          },
          key: 'id'
        },
      },
      newJoinerId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'NewJoiners',
          },
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down (queryInterface, Sequelize) {
    // stergerea tuturor tabelelor create
    await queryInterface.dropTable('Equipment');
    await queryInterface.dropTable('NewJoiners');
    await queryInterface.dropTable('EquipmentNewJoiners');
  }
};
