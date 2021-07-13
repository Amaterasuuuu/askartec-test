const { Router } = require('express')
const passport = require('passport')
const userController = require('../controllers/user.controller')
const check_auth = require('../middlewares/check_auth')
const router = Router()

router.post('/login', passport.authenticate('local'), async (req, res) => {
    res.status(200).json('Successfully login')
})
router.post('/signup', userController.create)
router.get('/', check_auth, userController.findAll)
router.get('/:id', check_auth, userController.findOne)
router.delete('/:id', check_auth, userController.delete)

module.exports = router
