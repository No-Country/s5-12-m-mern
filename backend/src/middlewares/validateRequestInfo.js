import { validateRequestPost, validateRequestPut } from "../models/Request.js"

export default (req, res, next) => {

    const { error } = req.method === 'POST' ? validateRequestPost(req.body) : validateRequestPut(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}