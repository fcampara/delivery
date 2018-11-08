const User = require('../models/user')
const logger = require('../../http/middlewares/logger').Logger
const getError = require('../../http/middlewares/error/MongoDB')

module.exports = () => {
  class UserRepository {
    static async save (data) {
      const user = new User(data)
      user.save(err => {
        if(err) {
          logger.error(JSON.stringify(err))
          const msg = getError[err.code]
        } else {
          console.log('Sucesso')
        }
      })
    }

    static async getAll () {
      User.find({}, (err, data) => {
        return data
      })
    }
  }

  return UserRepository
}