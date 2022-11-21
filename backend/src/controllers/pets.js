import {hashFunction, comparePassword} from "./../middlewares/hashFunction.js"

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

const petAll = (req, res) => {
    res.json(demopet)
}

const petSingle = async (req, res) => {
    const {id} = req.params
    let comparacion = await comparePassword(id, "$2b$10$cOuInuSSyeVX2rWKkMGbHOnDI.L.3fXFhncx9WwZ7BoTM22heJGCi")
    console.log(comparacion)
    res.json(demopet[0])
}

export {petAll, petSingle}