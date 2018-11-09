const User = require('../models/user')
const getErrorMongoDB = require('../../http/middlewares/error/MongoDB')

module.exports = () => {
  class UserRepository {

    static async save (data) {
      return new Promise((resolve, reject) => {
        const user = new User(data)
        user.save(err => {
          !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Saved success!'})
        })
      })
    }

    static async getById ({ _id }) {
      return new Promise((resolve, reject) => {
        User.findById(_id, (err, data) => {
          !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Find success!', data})
        })
      })
    }

    static async getAll () {
      return new Promise((resolve, reject) => {
        User.find({}, (err, data) => {
          !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Load success!', data})
        })
      })
    }

    static async deleteById ({ _id }) {
      return new Promise((resolve, reject) => {
        User.deleteOne({ _id }, err => {
          !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Deleted success!'})
        })
      })
    }

  }
  return UserRepository
}