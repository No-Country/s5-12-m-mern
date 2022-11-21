import mongoose from "mongoose";

const connectMongoDb = async () => {
try {
    mongoose.connect(process.env.DB_URI)
    console.log(`Mongo DB connected!`)
} catch (error) {
    console.log(error);
    }
}
export {connectMongoDb}