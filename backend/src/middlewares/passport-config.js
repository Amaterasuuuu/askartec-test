const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs')
const UserModel = require('../models/user.model')

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({
            usernameField: 'login',
            passReqToCallback: true
        }, (req, login, password, done) => {
                UserModel.findOne({ login }).then(user => {
                    if (!user){
                        return done(null, false)
                    }
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            throw err
                        }
                        if (isMatch) {
                            return done(null, user)
                        }
                        return done(null, false, { message: 'Invalid login or password' })
                    })
                })
            }
        )
    )
    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })
    passport.deserializeUser(function(id, done) {
        UserModel.findById(id, function(err, user) {
            done(err, user)
        })
    })
}