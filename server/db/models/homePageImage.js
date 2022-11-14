const Sequelize = require('sequelize')
const db = require('../db')

const HomePageImage = db.define('homePageImage', {
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: './header_image.webp'
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true
  }
})

module.exports = HomePageImage
