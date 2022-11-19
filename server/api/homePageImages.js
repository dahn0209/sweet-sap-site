const router = require('express').Router()
const {HomePageImage} = require('../db/models')

// <-- assumes main route to products set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allHomePageImages = await HomePageImage.findAll()
    allHomePageImages.map(homePageImage => {
      return homePageImage
    })
    res.json(allHomePageImages)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newHomepageImage = await HomePageImage.create(req.body)

    res.send(newHomepageImage)
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const homePageImageId = req.params.id
    const updateHomePageImage = await HomePageImage.findByPk(homePageImageId)
    res.send(await updateHomePageImage.update(req.body))
  } catch (error) {
    next(error)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const homePageImageId = req.params.id
    const deleteHomePageImage = await HomePageImage.findByPk(homePageImageId)

    if (!deleteHomePageImage) {
      res.sendStatus(404)
    }
    await deleteHomePageImage.destroy()
    res.send(deleteHomePageImage)
  } catch (error) {
    next(error)
  }
})

module.exports = router
