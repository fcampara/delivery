const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true, trim: true },
  username: { type: String, unique: true, required: true, trim: true },
  password: { type: String, required: true }
})

UserSchema.statics.findByFilter = function(values, cb) {
  let query = {}
  for (let key in values) {
    query[key] = new RegExp(values[key], 'i')
  }

  return this.model('User').find({ ...query }, cb).skip(0).limit(2)
}

const User = mongoose.model('User', UserSchema)

module.exports = User