const { Router } = require('express')
const router = Router()
const passport = require('passport')
const users = require('./user')
const categories = require('./category')
const products = require('./product')

router.post('/login', passport.authenticate('local'))
router.use('/users', users)
router.use('/categories', categories)
router.use('/', products)

module.exports = router
