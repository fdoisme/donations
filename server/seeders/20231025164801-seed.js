'use strict';
const fs = require("fs")
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const seed = JSON.parse(fs.readFileSync("./data/project.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el
    })
    const seed2 = JSON.parse(fs.readFileSync("./data/history.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      return el
    })
    const seed3 = JSON.parse(fs.readFileSync("./data/user.json", "utf-8")).map((el) => {
      el.createdAt = el.updatedAt = new Date();
      el.password = bcrypt.hashSync(el.password, 10)
      return el
    })
    await queryInterface.bulkInsert("Projects", seed)
    await queryInterface.bulkInsert("Users", seed3)
    await queryInterface.bulkInsert("Histories", seed2)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {})
    await queryInterface.bulkDelete("Histories", null, {})
    await queryInterface.bulkDelete("Users", null, {})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
