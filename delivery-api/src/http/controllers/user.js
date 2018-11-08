 const validator = require('../middlewares/validator/index')
 const UserRepositories = require ('../../domain/repositories/user')
 module.exports = () => {
  class UserController {
    static create (req, res) {
      validator.check('createUser', req.body).then(({data}) => {
        UserRepositories().save(data)
        res.state(200).json()
      }).catch(err => {
        res.status(400).json(err)
      })
    }

    static getAll (req, res) {
      const teste = UserRepositories().getAll()
      res.status(200).json(teste)
    }
  }

  return UserController
 }