const express = require('express')
const router = express.Router()
const passport = require('passport')
const AuthController = require('../controllers/auth')
const UserController = require('../controllers/user')

router
.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))
.get('/google/callback', passport.authenticate('google'), AuthController().google)// POST

router
  .post('/login', AuthController().login)
  .post('/', UserController().create)

module.exports = router