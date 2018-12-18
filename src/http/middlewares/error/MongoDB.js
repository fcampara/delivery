
getError = (err) => {
  console.log(JSON.stringify(err))
  const error = errors(err)
  return { success: false, ...error }
}

errors = (err) => {
  switch(err.code) {
    case '11000':
      return { message: 'Duplicate key', status: 406 }

    default:
      return { message: err.message ? err.message : 'Undefined error in database', status: 400}
  }
}
module.exports = getError