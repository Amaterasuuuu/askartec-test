const { Router } = require('express')
const productController = require('../controllers/product.controller')
const check_auth = require('../middlewares/check_auth')
const router = Router()

router.get('/', check_auth, productController.findAll)
router.get('/favorites', check_auth, productController.findAllFav)
router.get('/:id', check_auth, productController.findOne)
router.post('/', check_auth, productController.create)
router.post('/add-to-favorite', check_auth, productController.addToFav)
router.delete('/:id', check_auth, productController.delete)

module.exports = router
