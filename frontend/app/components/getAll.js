const getAll = () => {
    return fetch("http://localhost:8080/api/pets/pets")
    .then(res => res.json())
}

export default async function AllData() {
    try {
        const {totalPets} = await getAll()

        return totalPets.map(mascota => {
                    <div key={mascota._id}>
                        {console.log(mascota._id)}
                        <h1>ID mascota: </h1>
                        <p>{mascota.name}</p>
                    </div>
                    })

    } catch (error) {
        console.log({errorcito: error})
    }
}