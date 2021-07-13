const { Router } = require('express')
const router = Router()
const users = require('./user')
const categories = require('./category')
const products = require('./product')

router.use('/users', users)
router.use('/categories', categories)
router.use('/products', products)

module.exports = router
