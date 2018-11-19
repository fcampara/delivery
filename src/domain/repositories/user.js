const User = require('../models/user')
const getErrorMongoDB = require('../../http/middlewares/error/MongoDB')
const bcrypt = require('bcrypt')

module.exports = () => {
  class UserRepository {

    static async save (data) {
      return new Promise((resolve, reject) => {
        bcrypt.hash(data.password, 10).then((hash) => {
          const user = new User(data)
          user.password = hash
          user.save(err => {
            !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Saved success!'})
          })
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

    static async getByUsername (username) {
      return new Promise((resolve, reject) => {
        User.findOne({username}, (err, data) => {
          !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Find success!', data})
        })
      })
    }

    static async getByFilter () {
      let [query] = arguments

      return new Promise((resolve, reject) => {
        User.findByFilter(query, (err, data) => {
          User.countDocuments(User.findByFilter(query) , (err, count) => {
            !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Filter success!', count, data})
          })
        })
      })
    }

    static async getAll () {
      return new Promise((resolve, reject) => {
        User.find({}).skip(0).limit(10).exec((err, data) => {
          User.estimatedDocumentCount({}, (err, count) => {
            !!err ? reject(getErrorMongoDB(err)) : resolve({success: true, status: 200, message: 'Load success!', count, data})
          })
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