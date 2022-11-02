const Sequelize = require('sequelize')
const db = require('../db')

const Hours = db.define('hours', {
  Monday: {
    type: Sequelize.TIME
  },
  Thursday: {
    type: Sequelize.TIME,
    allowNull: false
  },
  Friday: {
    type: Sequelize.TIME,
    allowNull: false
  },
  Saturday: {
    type: Sequelize.TIME,
    allowNull: false
  },
  Sunday: {
    type: Sequelize.TIME,
    allowNull: false
  }
})

module.exports = Hours
