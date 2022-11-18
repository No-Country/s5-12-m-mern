import mongoose from "mongoose";
import Joi from "joi";
import bcrypt from "bcrypt";
import { petSchema } from "./Pet.js";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    dni: {
        type: Number,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verToken: String,
    isOwner: {
        type: Boolean,
        required: true
    },
    pets: {
        type: [petSchema]
    }
});

userSchema.statics.encryptPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (err) {
        console.log(err);
    }
};

userSchema.statics.comparePassword = async (password, passwordToCompare) => {
    return await bcrypt.compare(password, passwordToCompare);
};

export const validateUser = (user) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
    return schema.validate(user)
}

export const UserModel = mongoose.model('users', userSchema);
