const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user')

// GET
router
  .get('/', UserController().getAll)
  .get('/filter', UserController().getByFilter)
  .get('/:_id', UserController().getById)

// POST
router
  .post('/', UserController().create)

// DELETE
router
  .delete('/:_id', UserController().delete)

module.exports = router