const router = require('express').Router()
const {HomePageImage} = require('../db/models')

// <-- assumes main route to products set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allHomePageImages = await HomePageImage.findAll()
    allHomePageImages.map(homePageImage => {
      console.log('homePageImage server=>', homePageImage)
      return homePageImage
    })
    res.json(allHomePageImages)
  } catch (err) {
    next(err)
  }
})

module.exports = router
