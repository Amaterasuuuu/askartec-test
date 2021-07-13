const { Router } = require('express')
const passport = require('passport')
const authController = require('../controllers/auth.controller')
const router = Router()

router.post('/login', passport.authenticate('local'), authController.login)

module.exports = router
