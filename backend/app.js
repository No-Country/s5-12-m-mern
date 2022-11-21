//Para hacer andar el node en modo --watch necesitan tener la ultima versión instalada: npm install n -g

//inicialización de módulos
import dotenv from 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from "cors";
import {connectMongoDb} from './src/config/db.js'

//Import de rutas
import { router as petRouter } from "./src/routes/pets.js"
//import userRouter from './src/routes/user.routes.js';

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    'origin': ['*'], //cambiar * por ip donde se alojará la app front
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));
app.use(morgan('dev'))
app.use(express.json()) //nuevo body parser incluido en ultimas versiones de express
app.use(express.urlencoded({ extended: false })) //necesario para metodos POST, PUT, PATCH y DELETE

//rutas
app.use('/api/pets', petRouter)
//app.use('/api/user', userRouter)

app.get('*', (req, res) => res.status(404).json({ error: "Not found" })) //msg de error 404 para rutas no definidas

connectMongoDb()
app.listen(port, () => console.log(`App working on port ${port}!`))