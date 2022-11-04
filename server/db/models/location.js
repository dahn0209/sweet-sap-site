const Sequelize = require('sequelize')
const db = require('../db')

const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/

const Location = db.define('location', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '189-11 Northerrn Boulevard Flushing, NY, 11358'
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      validator: function(v) {
        return phoneValidationRegex.test(v)
      }
    },
    defaultValue: '718-225-1000'
  }
})

module.exports = Location
