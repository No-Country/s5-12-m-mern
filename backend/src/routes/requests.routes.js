import { Router } from 'express'
import { createRequest, deleteRequest, getAllUserRequests, getRequestById, setRequestState } from '../controllers/requests.controller.js'
import validateRequestInfo from '../middlewares/validateRequestInfo.js'

const requestRouter = Router()

requestRouter.post('/', validateRequestInfo, createRequest)
requestRouter.get('/:id', getRequestById)
requestRouter.get('/:user_id', getAllUserRequests)
requestRouter.patch('/:id', validateRequestInfo, setRequestState)
requestRouter.delete('/:id', deleteRequest)

export default requestRouter