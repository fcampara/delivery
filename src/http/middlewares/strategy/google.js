const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy

const Dotenv = require('dotenv')
Dotenv.config()

module.exports = new GoogleStrategy({
  clientID: `${process.env.GOOGLE_CLIENT_ID}`,
  clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
  callbackURL: `${process.env.GOOGLE_CALLBACK}`
},(accessToken, refreshToken, profile, cb) => {
  console.log(profile)
  const { displayName, name, emails } = profile
})