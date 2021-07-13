const { Router } = require('express')
const productController = require('../controllers/product.controller')
const router = Router()

router.get('/', productController.findAll)
router.get('/favorites', productController.findAllFav)
router.get('/:id', productController.findOne)
router.post('/', productController.create)
router.post('/add-to-favorite', productController.addToFav)
router.delete('/:id', productController.delete)

module.exports = router
