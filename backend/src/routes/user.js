const { Router } = require('express')
const passport = require('passport')
const userController = require('../controllers/user.controller')
const router = Router()

router.post('/login', passport.authenticate('local'), async (req, res) => {
    res.status(200).json('Successfully login')
})
router.post('/signup', userController.create)

router.get('/', userController.findAll)
router.get('/:id', userController.findOne)
router.delete('/:id', userController.delete)

module.exports = router
