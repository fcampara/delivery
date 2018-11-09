const express = require('express')
const router = express.Router()

router.post('/login', (req, res) => {
    console.log('ooi')
    res.send('login ok')
})

module.exports = router