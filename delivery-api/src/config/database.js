const logger = require('../http/middlewares/logger').Logger
const mongoose = require(`mongoose`)
const uri = 'mongodb://felipe:abc123@ds155073.mlab.com:55073/delivery-fcs'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true
})
const db = mongoose.connection

db.on("error", (err) => {
  logger.error(err)
}).once("open", (data) => {
  logger.info(`Start Database in ${new Date().toISOString()}`)
})

module.exports = db