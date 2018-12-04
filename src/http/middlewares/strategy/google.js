const GoogleStrategy = require('passport-google-oauth20').Strategy

const Dotenv = require('dotenv')
Dotenv.config()

module.exports = new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/api/auth/google/callback'
},(accessToken, refreshToken, profile, cb) => {
   console.log(accessToken, refreshToken, profile)
})