const router = require('express').Router()
const {Menu} = require('../db/models')

// <-- assumes main route to products set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allMenus = await Menu.findAll()
    allMenus.map(menu => {
      console.log('menu in api==>', menu)
      return menu
    })
    res.json(allMenus)
  } catch (err) {
    next(err)
  }
})

module.exports = router
