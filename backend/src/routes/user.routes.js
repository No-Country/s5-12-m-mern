const express = require('express')
const { createUser, getUser } = require('../controllers/user.js')
const userRouter = express.Router()


userRouter.post('/', createUser)
userRouter.get('/:id', getUser)

export default userRouter