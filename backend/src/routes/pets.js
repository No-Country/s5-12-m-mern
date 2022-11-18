import express from 'express'
import {petAll, petSingle} from './../controllers/pets.js'
const router = express.Router()

router.get('/', petAll)
router.get('/:id', petSingle)

export {router}