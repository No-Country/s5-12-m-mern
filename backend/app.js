//Para hacer andar el node en modo --watch necesitan tener la ultima versión instalada: npm install n -g

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))