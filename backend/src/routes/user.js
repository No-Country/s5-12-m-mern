const express = require('express')
const router = express.Router()
const controller = require('./../controllers/user')

router.get('/', controller.userAll)
router.get('/:id', controller.userSingle)

module.exports = router