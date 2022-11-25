const getAll = async () => {
    return await fetch("http://localhost:8080/api/pets/pets")
    .then(res => res.json())
    .catch(err => console.log(err))
}

export default function AllData() {
    const {totalPets} = getAll()
    if(totalPets) return totalPets.map(mascota => {
        <div key={mascota._id}>
            {console.log(mascota)}
            {console.log(mascota._id)}
                <h1>ID mascota: </h1>
                <p>{mascota.name}</p>
        </div>
    })
    return 'No hay mascotas'
}