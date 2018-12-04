const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const Dotenv = require('dotenv')
Dotenv.config()

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}

module.exports = new JwtStrategy(opts, (jwtPayload, done) => {
  return done(null, true)
})