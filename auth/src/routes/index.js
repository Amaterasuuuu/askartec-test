const { Router } = require('express')
const router = Router()
const users = require('./user')
const categories = require('./category')
const products = require('./product')
const auth = require('./auth')

router.use('/auth', auth)
router.use('/users', users)
router.use('/categories', categories)
router.use('/products', products)

module.exports = router
