const router = require('express').Router()
const {HomePageImage} = require('../db/models')
const multer = require('multer')
const cors = require('cors')

// const path = require("path");

////multer middleware section for storage///
///file storage

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    ///destination:where file is stgored
    cb(null, 'public/newHomeImages/')
  },
  filename: function(req, file, cb) {
    ///defines how file is named
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage})

router.use(cors())
// <-- assumes main route to home image set up with app.use in index.js -->  //

router.get('/', async (req, res, next) => {
  try {
    const allHomePageImages = await HomePageImage.findAll()
    allHomePageImages.map(homePageImage => {
      return homePageImage
    })
    console.log('allHomePageImages=>', allHomePageImages)
    res.json(allHomePageImages)
  } catch (err) {
    next(err)
  }
})

router.post('/', upload.single('imageUrl'), async (req, res, next) => {
  try {
    // const formData=new FormData()
    let imageUrl = req.file.filename
    console.log('req.file=>', req.file)
    console.log('imageUrl=>', imageUrl)

    let newImg = `./newHomeImages/${imageUrl}`
    const newHomepageImage = await HomePageImage.create({
      // imageFile:req.file,
      imageUrl: newImg,
      // imageUrl:req.file.path,
      description: req.body.description
    })
    console.log('newHomePageImage backend->', newHomepageImage)
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
