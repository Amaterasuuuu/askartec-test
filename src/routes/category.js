const { Router } = require('express')
const categoryController = require('../controllers/category.controller')
const check_auth = require('../middlewares/check_auth')
const router = Router()

router.get('/', check_auth, categoryController.findAll)
router.get('/:id', check_auth, categoryController.findOne)
router.post('/', check_auth, categoryController.create)
router.delete('/:id', check_auth, categoryController.delete)

module.exports = router
