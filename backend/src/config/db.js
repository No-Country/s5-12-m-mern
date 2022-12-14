import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";

const connectMongoDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { dbName: "walkncare" })
        console.log('Connected to MongoDB')
    } catch (err) {
        throw Error(err);
    }
}
export { connectMongoDb }