const router = require('express').Router()
const {PrivateEvents} = require('../db/models')

// <-- assumes main route to products set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allPrivateEvents = await PrivateEvents.findAll()
    allPrivateEvents.map(privateEvent => {
      return privateEvent
    })
    res.json(allPrivateEvents)
  } catch (err) {
    next(err)
  }
})

module.exports = router
