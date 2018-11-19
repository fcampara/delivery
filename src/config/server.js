const port = 3000

const jwtStrategy = require('../http/middlewares/jwt')
const bodyParser = require(`body-parser`)
const passport = require('passport')
const express = require(`express`)
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
passport.use(jwtStrategy)

app.listen(port , () => {
  console.log(`BACKEND RUN IN PORT ${port}`)
})


module.exports = app