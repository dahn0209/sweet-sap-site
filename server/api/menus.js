const router = require('express').Router()
const {Menu} = require('../db/models')
const multer = require('multer')
// <-- assumes main route to products set up with app.use in index.js -->  //

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    ///destination:where file is stgored
    cb(null, 'public/menu/')
  },
  filename: function(req, file, cb) {
    ///defines how file is named
    console.log('file->', file)
    cb(null, file.originalname)
  }
})

const upload = multer({storage: storage})

router.get('/', async (req, res, next) => {
  try {
    const allMenus = await Menu.findAll()
    allMenus.map(eachMenu => {
      return eachMenu
    })
    res.json(allMenus)
  } catch (err) {
    next(err)
  }
})

module.exports = router
