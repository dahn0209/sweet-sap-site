const Sequelize = require('sequelize')
const db = require('../db')

const HoursSweetsap = db.define('hoursSweetsap', {
  Monday: {
    type: Sequelize.TIME,
    allowNull: false
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

module.exports = HoursSweetsap
