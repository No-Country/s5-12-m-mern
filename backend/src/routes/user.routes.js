import { Router } from 'express'
import { loginUser, editUser, getUserbyId, createUser, deleteUser, addImg } from '../controllers/user.controller.js'
import validateUserInfo from '../middlewares/validateUserInfo.js'
import profileImgHandler from '../middlewares/profileImgHandler.js'
const userRouter = Router()


userRouter.post('/signin', validateUserInfo, createUser)
userRouter.post('/login', loginUser)
userRouter.get('/:id', getUserbyId)
userRouter.post('/:id/img', profileImgHandler, addImg)
userRouter.patch('/:id', validateUserInfo, editUser)
userRouter.delete('/:id', deleteUser)

export default userRouter