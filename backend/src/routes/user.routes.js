import { Router } from 'express'
import { loginUser, editUser, getUserbyId, createUser, deleteUser } from '../controllers/user.js'
import validateUserInfo from '../middlewares/validateUserInfo.js'
const userRouter = Router()

userRouter.post('/signup', validateUserInfo, createUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUserbyId)
userRouter.patch('/:id', /*validateUserInfo*/ editUser)
userRouter.delete('/:id', deleteUser)

export default userRouter