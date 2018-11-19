const UserRepositories = require ('../../domain/repositories/user')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const Dotenv = require('dotenv')
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
                expiresIn: 120
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
  }

  return AuthController
}
