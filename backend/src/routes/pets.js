
import express from "express"
import { getPets, getPetById,createPet, updatePet, deletePet } from "../controllers/pets.js"

const petRoutes = express.Router()

petRoutes.get('/pets', getPets)
petRoutes.get('/pets/:petId', getPetById)
petRoutes.post('/pets', createPet)
petRoutes.put('/pets/:petId', updatePet);
petRoutes.delete('/pets/:petId', deletePet);

export default petRoutes