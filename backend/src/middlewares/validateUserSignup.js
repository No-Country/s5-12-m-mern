import { validateUser } from "../models/User.js"

export default (req, res, next) => {

    const { error } = validateUser(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}