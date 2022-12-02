import { validateUserPost, validateUserPut } from "../models/User.js"

export default (req, res, next) => {

    // Cambiar la función cuando esté la otra para el PATCH
    const { error } = req.method === 'post' ? validateUserPost(req.body) : validateUserPut(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}