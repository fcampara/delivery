const express = require('express')
const router = express.Router()
const passport = require('passport')
const AuthController = require('../controllers/auth')

router
  .post('/login', AuthController().login)
  .get('/google', passport.authenticate('google', { scope: ['profile'] }))
  .get('/google/callback', AuthController().google)

module.exports = router