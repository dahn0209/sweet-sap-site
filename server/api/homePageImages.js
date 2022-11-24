const router = require('express').Router()
const {HomePageImage} = require('../db/models')
const multer = require('multer')
const upload = multer({dest: 'public/newHomeImages/'})
const fs = require('fs')
const cors = require('cors')
const app = require('..')

app.use(cors())

// <-- assumes main route to home image set up with app.use in index.js -->  //

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

router.post('/', upload.single('imageUrl'), async (req, res, next) => {
  try {
    let fileType = req.file.mimetype.split('/')[1] ////this will get the webp file type
    let imageUrl = req.file.filename + '.' + fileType
    console.log('file request==>', req.file)
    await fs.rename(
      `public/newHomeImages/${req.file.filename}`,
      `public/newHomeImages/${imageUrl}`,
      function() {}
    )
    let newImg = `./newHomeImages/${imageUrl}`
    const newHomepageImage = await HomePageImage.create({
      imageUrl: newImg,
      description: req.body.description
    })
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
