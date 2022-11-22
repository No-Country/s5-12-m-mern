//Para hacer andar el node en modo --watch necesitan tener la ultima versión instalada: npm install n -g

//inicialización de módulos
import dotenv from 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose';
import cors from "cors";
// import './src/config/db.js'
import connectMongoDb from './src/config/db.js';

//Import de rutas
// import { hasToken } from './src/middlewares/authToken.js';
// import userRouter from './src/routes/user.routes.js';
// import petRoutes from './src/routes/pets.js';
import petRoutes from './src/routes/pets.js';

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
// app.use('/api/pets', hasToken, petsRouter)
app.use('/api', petRoutes)
// app.use('/api/user', userRouter)

app.get('*', (req, res) => res.status(404).json({ error: "Not found" })) //msg de error 404 para rutas no definidas

mongoose.connect(`${process.env.DB_URI}`)
.then(result => {
    console.log("soy el provisorio",port);
    app.listen(port)
})
.catch(err => {
    console.log(err);
})

// app.listen(port, () => console.log(`App working on port ${port}!`))
// app.use((req, res, next) => {
//     connectMongoDb()
//     // next()
// })