const express = require('express')
const router = express.Router()
const passport = require('passport')
const AuthController = require('../controllers/auth')

router
  .post('/login', AuthController().login)
  .get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }))
  .get('/google/callback', passport.authenticate('google'), AuthController().google)

module.exports = router