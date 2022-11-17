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

const petSingle = (req, res) => {
    const {id} = req.params
    console.log(id)
    res.json(demopet[0])
}

export {petAll, petSingle}