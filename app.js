const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cookie_parser = require('cookie-parser')
const passport = require('passport')
const session = require('express-session')
require('./src/middlewares/passport-config')(passport)
const MongoStore = require('connect-mongo')
const api = require('./src/routes/index')

const PORT = process.env.PORT || 5000
const URL = process.env.URL
const app = express()
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.locals.user = req.user || null
    next()
})
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true, saveUninitialized: false,
    store: new MongoStore({ mongoUrl: URL }),
    cookie: {
        maxAge: 60 * 1000 * 10
    }
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(cookie_parser())

app.use('/', api)

async function bootstrap() {
    try {
        await mongoose.connect(URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT, () => {
            console.log(`Server has been started on port ${PORT}`)
        })
    } catch(e) {
        console.log(e)
    }
}
bootstrap()
