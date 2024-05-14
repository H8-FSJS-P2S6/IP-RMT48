'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const data = require('../data/userdetail.json').map(e => {
      e.createdAt = e.updatedAt = new Date();
      return e;
    });
    await queryInterface.bulkInsert('UserDetails', data)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserDetails', null, {
      restartIdentity: true,
      cascade: true,
      truncate: true
    })
  }
};
