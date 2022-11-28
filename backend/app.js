//Para hacer andar el node en modo --watch necesitan tener la ultima versión instalada: npm install n -g

//inicialización de módulos
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from "cors";
import {connectMongoDb} from './src/config/db.js'

// import { hasToken } from './src/middlewares/authToken.js';
import userRouter from './src/routes/user.routes.js';
import petRoutes from './src/routes/pets.js';

const app = express()
const port = process.env.PORT || 3000


// app.use(cors({
//     'origin': ['*'], //cambiar * por ip donde se alojará la app front
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
// }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  
    next();
  });

app.use(morgan('dev'))
app.use(express.json()) 
app.use(express.urlencoded({ extended: false }))

//rutas
// app.use('/api/pets', hasToken, petsRouter)
app.use('/api/pets', petRoutes)
app.use('/api/user', userRouter)

connectMongoDb()
app.get('*', (req, res) => res.status(404).json({ error: "Not found" })) //msg de error 404 para rutas no definidas
app.listen(port, () => console.log(`App working on port ${port}!`))
