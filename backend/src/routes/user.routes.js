<<<<<<< HEAD
import express from 'express'
import { registerUser, getUserbyId, loginUser } from '../controllers/user.js'
import validateUserSignup from '../middlewares/validateUserSignup.js'
const userRouter = express.Router()


userRouter.post('/signin', validateUserSignup, registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUserbyId)
userRouter.patch('/:id',)
userRouter.delete('/:id',)
=======
import { Router } from 'express'
import { loginUser, editUser, getUserbyId, createUser, deleteUser } from '../controllers/user.js'
import validateUserInfo from '../middlewares/validateUserInfo.js'
const userRouter = Router()

userRouter.post('/signup', validateUserInfo, createUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUserbyId)
userRouter.patch('/:id', /*validateUserInfo*/ editUser)
userRouter.delete('/:id', deleteUser)
>>>>>>> 05063840fa94fbad54bfb2632975069e798ede9b

export default userRouter