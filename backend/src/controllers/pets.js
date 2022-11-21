import {hashFunction, comparePassword} from "./../middlewares/hashFunction.js"
import { PetModel } from "../models/Pet.js"

const demopet = [
    {
        id: "4321",
        name: "Otis",
        ownerId: "1234",
        weight: 8.5,
        specie: "labrador",
        notes: "no le gusta correr"
    },
    {
        id: "4322",
        name: "Cachupín",
        ownerId: "1234",
        weight: 3.0,
        specie: "chihuahua",
        notes: "alérgico a los bebés"
    }
]

const petAll = async (req, res) => {
    const pets = await PetModel.findById('637be21e7707f34f0987de9d')
    try {
        res.json(pets)
    } catch (error) {
        console.log(error)
    }
}

const petSingle = async (req, res) => {
    const {id} = req.params
    let comparacion = await comparePassword(id, "$2b$10$cOuInuSSyeVX2rWKkMGbHOnDI.L.3fXFhncx9WwZ7BoTM22heJGCi")
    console.log(comparacion)
    res.json(demopet[0])
}

export {petAll, petSingle}