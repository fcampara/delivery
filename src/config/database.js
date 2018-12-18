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
  console.log(err)
}).once("open", (data) => {
  console.log((`Start Database in ${new Date().toISOString()}`))
})

module.exports = db