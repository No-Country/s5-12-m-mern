import { validateRequest } from "../models/Request.js"

export default (req, res, next) => {

    const { error } = validateRequest(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}