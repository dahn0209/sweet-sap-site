const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/homePageImages', require('./homePageImages'))
router.use('/locations', require('./locations'))
router.use('/menus', require('./menus'))
router.use('/privateEvents', require('./privateEvents'))
router.use('/happenings', require('./happenings'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
