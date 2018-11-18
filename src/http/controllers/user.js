 const validator = require('../middlewares/validator/index')
 const UserRepositories = require ('../../domain/repositories/user')

 module.exports = () => {
  class UserController {
    static create (req, res) {
      validator.check('createUser', req.body).then(({data}) => {
        UserRepositories().save(data).then(({status, ...data}) => {
          res.status(status).json(data)
        }).catch(({status, ...err}) => {
          res.status(status).json(err)
        })
      }).catch(({status, ...err}) => {
        res.status(status).json(err)
      })
    }

    static getAll (req, res) {
      UserRepositories().getAll().then(({status, ...data}) => {
        res.status(status).json(data)
      }).catch(({status, ...err}) => {
        res.status(status).json(err)
      })
    }

    static getById (req, res) {
      validator.check('getByIdUser', req.params).then(({data}) => {
        UserRepositories().getById(data).then(({status, ...data}) => {
          res.status(status).json(data)
        }).catch(({status, ...err}) => {
          res.status(status).json(err)
        })
      }).catch(({status, ...err}) => {
        res.status(status).json(err)
      })
    }

    static getByFilter (req, res) {
      validator.check('getByFilter', req.query).then(({data}) => {
        UserRepositories().getByFilter(data).then(({status, ...data}) => {
          res.status(status).json(data)
        }).catch(({status, ...err}) => {
          res.status(status).json(err)
        })
      }).catch(({status, ...err}) => {
        res.status(status).json(err)
      })
    }

    static delete (req, res) {
      validator.check('deleteUser', req.body).then(({data}) => {
        UserRepositories().deleteById(data).then(({status, ...data}) => {
          res.status(status).json(data)
        }).catch(({status, ...err}) => {
          res.status(200).json(err)
        })
      }).catch(({status, ...err}) => {
        res.status(status).json(err)
      })
    }
  }

  return UserController
 }