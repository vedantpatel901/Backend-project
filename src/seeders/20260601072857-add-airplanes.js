'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airplanes', [
    {
      modelNumber: 'airbus-320',
      capacity: 200,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      modelNumber : 'boeing-747',
      capacity: 180,
      createdAt: new Date(),
      updatedAt: new Date()
    } 
  ])
  },
  

  

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Airplanes', {
      modelNumber: ['airbus-320', 'boeing-747']
     }, {});
  }
};
