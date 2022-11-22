import {hashFunction, comparePassword} from "./../middlewares/hashFunction.js"
import { PetModel } from "../models/Pet.js"
import jwtDecode from "jwt-decode"

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
    const pets = await PetModel.find()
    try {
        res.json(pets)
    } catch (error) {
        console.log(error)
    }
}

const petSingle = async (req, res) => {
    try {
        const {token} = req.headers
        const decodedToken = await jwtDecode(token)
        const {id} = req.params
        let comparacion = await comparePassword(id, "$2b$10$cOuInuSSyeVX2rWKkMGbHOnDI.L.3fXFhncx9WwZ7BoTM22heJGCi")
        res.json({token})
    } catch (error) {
        res.json(error)
    }
}

export {petAll, petSingle}