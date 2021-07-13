const { Router } = require('express')
const categoryController = require('../controllers/category.controller')
const router = Router()

router.get('/', categoryController.findAll)
router.get('/:id', categoryController.findOne)
router.post('/', categoryController.create)
router.delete('/:id', categoryController.delete)

module.exports = router
