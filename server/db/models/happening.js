const Sequelize = require('sequelize')
const db = require('../db')

const Happening = db.define('happening', {
  imageUrl: {
    type: Sequelize.STRING
    // defaultValue: './header_image.webp'
  }
})

module.exports = Happening
