const logger = require('../http/middlewares/logger').Logger
const mongoose = require(`mongoose`)
const Dotenv = require('dotenv')
Dotenv.config()
const uri = process.env.DB_URI
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