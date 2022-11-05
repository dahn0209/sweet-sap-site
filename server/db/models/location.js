const Sequelize = require('sequelize')
const db = require('../db')

const phoneValidationRegex = /\d{3}-\d{3}-\d{4}/

const Location = db.define('location', {
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: '189-11 Northerrn Boulevard'
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Flushing'
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'NY'
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 11358
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
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'customerservice@thesweetsap.com'
  }
})

module.exports = Location
