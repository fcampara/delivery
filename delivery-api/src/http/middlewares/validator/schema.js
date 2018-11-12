const Joi = require('joi')

module.exports = {

  createUser: () => (
    Joi.object().required().keys({
      email: Joi.string().email().required(),
      username: Joi.string().alphanum().min(3).max(30).required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    })
  ),

  deleteUser: () => (
    Joi.object().required().keys({
      _id: Joi.string().required()
    })
  ),

  getByIdUser: () => (
    Joi.object().required().keys({
      _id: Joi.string().required()
    })
  ),

  getByFilter: () => (
    Joi.object().required().keys({
      _id: Joi.string(),
      email: Joi.string(),
      username: Joi.string().alphanum().min(3).max(30),
    })
  )

}
