
import express from "express"
import { getPets, createPet } from "../controllers/pets.js"

const petRoutes = express.Router()

petRoutes.get('/pets', getPets)
petRoutes.post('/pets', createPet)

export default petRoutes