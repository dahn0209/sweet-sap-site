const Sequelize = require('sequelize')
const db = require('../db')

const Menu = db.define('menu', {
  description: {
    type: Sequelize.STRING
    // defaultValue: ''
  },
  imageUrl: {
    type: Sequelize.STRING
    // defaultValue: './header_image.webp'
  }
})

module.exports = Menu
