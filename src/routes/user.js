const { Router } = require('express')
const userController = require('../controllers/user.controller')
const check_auth = require('../middlewares/check_auth')
const router = Router()

router.get('/', check_auth, userController.findAll, async (req, res) => {
    res.status(200).json('Successfully login')
})
router.get('/:id', check_auth, userController.findOne)
router.post('/', check_auth, userController.create)
router.delete('/:id', check_auth, userController.delete)

module.exports = router
