import express from 'express'
import { registerUser, getUserbyId, loginUser } from '../controllers/user.js'
import validateUserSignup from '../middlewares/validateUserSignup.js'
const userRouter = express.Router()


userRouter.post('/signin', validateUserSignup, registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUserbyId)
userRouter.patch('/:id',)
userRouter.delete('/:id',)

export default userRouter