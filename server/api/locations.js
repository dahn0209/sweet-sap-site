const router = require('express').Router()
const {Location} = require('../db/models')

// <-- assumes main route to products set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allLocations = await Location.findAll()
    allLocations.map(eachLocation => {
      return eachLocation
    })
    res.json(allLocations)
  } catch (err) {
    next(err)
  }
})

module.exports = router
