const port = 3000

const bodyParser = require(`body-parser`)
const express = require(`express`)
const app = express()

// const session =  require('express-session')
// const passport = require('passport')
// const MongoStore = require('connect-mongo')(session)

// const db = require('./database')

// app.use(session({
//   store: new MongoStore({ db, ttl: 30 * 60 }),
//   secret: '123',
//   resave: false,
//   saveUninitialized: false
// }))

// app.use(passport.initialize())
// app.use(passport.session())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.listen(port , () => {
  console.log(`BACKEND RUN IN PORT ${port}`)
})


module.exports = app