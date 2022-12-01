
import express from "express"
import { getPets, getPetById,createPet, updatePet, deletePet } from "../controllers/pets.js"

const petRoutes = express.Router()

petRoutes.get('/', getPets)
petRoutes.get('/:petId', getPetById)
petRoutes.post('/:id', createPet)
petRoutes.put('/:petId', updatePet);
petRoutes.delete('/:petId', deletePet);

export default petRoutes