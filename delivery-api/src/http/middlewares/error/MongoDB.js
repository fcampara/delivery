const logger = require('../logger').Logger

getError = (err) => {
  logger.error(JSON.stringify(err))
  const error = errors(err.code)
  return { success: false, ...error }
}

errors = (err) => {
  switch(err) {
    case '11000':
      return { message: 'Duplicate key', status: 406 }

    default:
      return { message: 'Undefined error in database', status: 400}
  }
}
module.exports = getError