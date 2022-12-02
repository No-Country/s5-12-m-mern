import { validateUserPost, validateUserPut } from "../models/User.js"

export default (req, res, next) => {

    console.log(req.method)
    const { error } = req.method === 'POST' ? validateUserPost(req.body) : validateUserPut(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}