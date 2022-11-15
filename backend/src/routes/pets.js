const express = require('express')
const router = express.Router()
const controller = require('./../controllers/pets')

router.get('/', controller.petAll)
router.get('/:id', controller.petSingle)

module.exports = router