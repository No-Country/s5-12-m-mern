import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const petSchema = new mongoose.Schema({
    specie: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    vaxDate: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    owner: { 
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },

});

export const validatePet = (pet) => {
    const schema = Joi.object({
        specie: Joi.string().required(),
        name: Joi.string().required(),
        age: Joi.number().required(),
        vaxDate: Joi.string(),
        description: Joi.string().required().min(6),
        size: Joi.string().required(),
        owner: Joi.ObjectId()
    })
    return schema.validate(pet)
}

export const PetModel = mongoose.model('pets', petSchema);
