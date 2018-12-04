const UserRepositories = require ('../../domain/repositories/user')
const passport = require('passport')
const bcrypt = require('bcrypt')
const Dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
Dotenv.config()

module.exports = () => {
  class AuthController {
    static login (req, res) {
      const { username, password } = req.body
      UserRepositories().getByUsername(username).then(resp => {
        const { data: user, success } = resp

        if (success && user) {
          bcrypt.compare(password, user.password, (err, isValid) => {
            if (isValid) {
              const token =  jwt.sign({ username }, process.env.SECRET, {
                expiresIn: process.env.EXPIRESIN
              })
              res.status(200).json({
                message: 'Success Login',
                token
              })
            } else {
              res.status(401).json({
                message: 'Wrong password',
                token: null
              })
            }
          })
        } else {
          res.status(401).json({
            message: 'User not found',
            token: null
          })
        }
      }).catch(({status, ...err}) => {
        res.status(status).json(err)
      })
    }

    static google (req, res) {
      passport.authenticate('google', () => {
        console.log('oi')
        res.redirect('/')
      })
    }
  }

  return AuthController
}
