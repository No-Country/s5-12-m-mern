//Para hacer andar el node en modo --watch necesitan tener la ultima versión instalada: npm install n -g

//inicialización de módulos
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 3000 

app.use(morgan('dev'))
app.use(express.json()) //nuevo body parser incluido en ultimas versiones de express
app.use(express.urlencoded({extended: false})) //necesario para metodos POST, PUT, PATCH y DELETE

//rutas
app.use('/api', require('./src/routes/index')) //base donde están todas las rutas

app.get('*', (req, res) => res.status(404).json({error: "Not found"})) //msg de error 404 para rutas no definidas
app.listen(port, () => console.log(`App working on port ${port}!`))