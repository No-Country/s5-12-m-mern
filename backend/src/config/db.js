import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connectMongoDb = async () => {
<<<<<<< HEAD
    try {
        await mongoose.connect(process.env.DB_URI, { dbName: "walkncare" })
        console.log('Connected to MongoDB')
    } catch (err) {
        throw Error(err);
=======
try {
    mongoose.connect(process.env.DB_URI)
    console.log(`Mongo DB connected!`)
} catch (error) {
    console.log(error);
>>>>>>> c7bbe0c04a6c171982bbf59152d7a5a93b58a34b
    }
}
export {connectMongoDb}