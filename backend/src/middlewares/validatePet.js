import { validatePet } from "../models/Pet";

export default (req, res, next) => {

    const { error } = validatePet(req.body)

    if (error) return res.status(400).send(error.message)

    next()
}