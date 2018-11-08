const User = require('../models/user')
const logger = require('../../http/middlewares/logger').Logger
const getError = require('../../http/middlewares/error/MongoDB')

module.exports = () => {
  class UserRepository {
    static async save (data) {
      return new Promise((resolve, reject) => {
        const user = new User(data)
        user.save(err => {
          if(err) {
            logger.error(JSON.stringify(err))
            getError[err.code]
          } else {
            
          }
        })
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