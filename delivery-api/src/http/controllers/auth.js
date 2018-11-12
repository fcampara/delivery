const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

module.exports = (passport) => {

  passport.serializeUser((user, done) => {
    console.log('SerializeUser: ', user)
    // done(null,user._id);
  })

  passport.deserializeUser((id, done) => {
    console.log('DeserialieUser: ', id)
    // findUserById(id, function(err,user){
    //   done(err, user);
    // })
  })

  passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  },
))
}