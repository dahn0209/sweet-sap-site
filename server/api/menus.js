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

router.get('/:menuId', async (req, res, next) => {
  try {
    const menu = await Menu.findByPk(req.params.menuId)
    console.log('get sing menu Id backend=>', menu)
    res.json(menu)
  } catch (err) {
    next(err)
  }
})

router.post('/', upload.single('imageUrl'), async (req, res, next) => {
  try {
    console.log('req.file->', req.file)
    let imageUrl = req.file.originalname
    let newImg = `./menu/${imageUrl}`
    const newMenu = await Menu.create({
      description: req.body.description,
      imageUrl: newImg
    })
    res.send(newMenu)
  } catch (error) {
    next(error)
  }
})

router.put('/:menuId', upload.single('imageUrl'), async (req, res, next) => {
  try {
    let imageUrl = req.file.originalname
    console.log('api imageURL put=>', imageUrl)
    let newImg = `./menu/${imageUrl}`
    const menuId = req.params.menuId
    const updateMenu = await Menu.findByPk(menuId)
    console.log('updateMenu  API=>', updateMenu)
    res.send(
      await updateMenu.update({
        description: req.body.description,
        imageUrl: newImg
      })
    )
  } catch (error) {
    next(error)
  }
})

router.delete('/:menuId', async (req, res, next) => {
  try {
    const menuId = req.params.menuId
    const deleteMenu = await Menu.findByPk(menuId)
    console.log('let deleteMenu delete', deleteMenu)

    if (!deleteMenu) {
      res.sendStatus(404)
    }
    await deleteMenu.destroy()
    res.send(deleteMenu)
  } catch (error) {
    next(error)
  }
})

module.exports = router
