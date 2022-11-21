import mongoose from "mongoose";

const connectMongoDb = async () => {
try {
    mongoose.connect('mongodb+srv://paseos:Mascotas2022@cluster0.1xynyxj.mongodb.net/paseos?retryWrites=true&w=majority')
    console.log(`Mongo DB connected!`)
} catch (error) {
    console.log(error);
    }
}
export {connectMongoDb}