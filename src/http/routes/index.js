const passport = require("passport")
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Welcome example login in mongo DB')
})

router.use('/user', passport.authenticate('jwt', { session: false }), require('./user'))
router.use('/auth', require('./auth'))
module.exports = router