const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

router.get('/', UserController().getAll)
router.post('/', UserController().create)

module.exports = router