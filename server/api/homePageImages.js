const router = require('express').Router()
const {HomePageImage} = require('../db/models')
const multer = require('multer')
// const cors = require('cors')

// const path = require("path");

////multer middleware section for storage///
///file storage

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    ///destination:where file is stgored
    cb(null, 'public/homePage/')
  },
  filename: function(req, file, cb) {
    ///defines how file is named
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage})

// router.use(cors())
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

router.get('/:homePageImageId', async (req, res, next) => {
  try {
    const homePageImage = await HomePageImage.findByPk(
      req.params.homePageImageId
    )
    res.json(homePageImage)
  } catch (err) {
    next(err)
  }
})

router.post('/', upload.single('imageUrl'), async (req, res, next) => {
  try {
    let imageUrl = req.file.filename

    let newImg = `./homePage/${imageUrl}`
    const newHomepageImage = await HomePageImage.create({
      imageUrl: newImg,
      description: req.body.description
    })
    res.send(newHomepageImage)
  } catch (error) {
    next(error)
  }
})

router.put(
  '/:homePageImageId',
  upload.single('imageUrl'),
  async (req, res, next) => {
    try {
      let imageUrl = req.file.filename

      let newImg = `./homePage/${imageUrl}`

      const homePageImageId = req.params.homePageImageId
      const updateHomePageImage = await HomePageImage.findByPk(homePageImageId)
      console.log('updateHomePageImage  API=>', updateHomePageImage)
      res.send(
        await updateHomePageImage.update({
          imageUrl: newImg,
          description: req.body.description
        })
      )
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:homePageImageId', async (req, res, next) => {
  try {
    const homePageImageId = req.params.homePageImageId
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
