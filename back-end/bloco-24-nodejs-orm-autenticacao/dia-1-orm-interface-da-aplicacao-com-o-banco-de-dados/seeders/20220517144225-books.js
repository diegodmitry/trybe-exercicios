'use strict';

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Christine',
        author: 'Stephen King',
        pageQuantity: 616,
        createdAt: new Date("2022-01-28T13:23:32.514Z"),
        updatedAt: new Date("2022-01-28T13:23:32.514Z"),
      },
      {
        title: 'Bíblia',
        author: 'Deus',
        pageQuantity: 1.200,
        createdAt: new Date("2022-01-28T19:37:32.514Z"),
        updatedAt: new Date("2022-01-28T19:37:32.514Z"),
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {});
  }
};
