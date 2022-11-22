import { validateUser } from "../models/User.js"

export default (req, res, next) => {

    // Cambiar la función cuando esté la otra para el PATCH
    const { error } = req.method === 'post' ? validateUser(req.body) : validateUser(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}