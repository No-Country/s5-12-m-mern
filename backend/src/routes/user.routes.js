import validateUserSignup from '../middlewares/validateUserSignup.js'

const express = require('express')
const { createUser, getUser, loginUser } = require('../controllers/user.js')
const userRouter = express.Router()


userRouter.post('/signin', validateUserSignup, createUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUser)
userRouter.patch('/:id',)
userRouter.delete('/:id',)

export default userRouter