const bcrypt = require('bcrypt')
const UserRepositories = require ('../../domain/repositories/user')
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

  passport.use(new LocalStrategy({ usernameField: 'username', passwordField: 'password' },
    (username, password, done) => {
      UserRepositories().findUser(username, (err, user) => {
        if (err) { return done(err) }
        if (!user) { return done(null, false) }

        bcrypt.compare(password, user.password, (err, isValid) => {
          if (err) { return done(err) }
          if (!isValid) { return done(null, false) }
          return done(null, user)
        })
      })
    }
  ))
}