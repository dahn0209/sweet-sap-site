const Sequelize = require('sequelize')
const db = require('../db')

const Menu = db.define('menu', {
  description: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.STRING
  }
})

module.exports = Menu
