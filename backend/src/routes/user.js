import express from 'express'
import {userAll, userSingle} from './../controllers/user.js'
const router = express.Router()

router.get('/', userAll)
router.get('/:id', userSingle)

export {router}