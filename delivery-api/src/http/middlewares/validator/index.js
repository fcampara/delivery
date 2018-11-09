const Joi = require('joi')
const getSchemas = require('./schema')

module.exports = {
  check: (schema, data) => {
    return new Promise((resolve, reject) => {
      const selectedSchema = getSchemas[schema]()
      Joi.validate(data, selectedSchema, { abortEarly: false },(err, data) => {
        if (err) {
          const error = getError(err)
          reject({ success: false, error, status: 406 })
        } else {
          resolve({ success: true, error: null, data, status: 200 })
        }
      })
    })
  }
}

function getError (err) {
  return err.details.map(e => {
    return {
      message: e.message,
      field: e.path[0]
    }
  })
}