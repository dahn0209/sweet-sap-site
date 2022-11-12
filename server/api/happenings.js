const router = require('express').Router()
const {Happening} = require('../db/models')

// <-- assumes main route to products set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allHappenings = await Happening.findAll()
    allHappenings.map(happening => {
      return happening
    })
    res.json(allHappenings)
  } catch (err) {
    next(err)
  }
})

module.exports = router
