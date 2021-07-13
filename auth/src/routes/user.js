const { Router } = require('express')
const userController = require('../controllers/user.controller')
const check_auth = require('../middlewares/check_auth')
const router = Router()

router.post('/signup', check_auth, userController.create)
router.get('/', check_auth, userController.findAll)
router.get('/:id', check_auth, userController.findOne)
router.delete('/:id', check_auth, userController.delete)

module.exports = router
