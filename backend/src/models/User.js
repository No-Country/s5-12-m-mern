import mongoose, { Schema } from "mongoose";
import Joi from "joi";
import bcrypt from "bcrypt";

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
    isOwner: {
        type: Boolean,
        required: true
    },
    pets: [{ //solo req cuando isOwner = true
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        default: [],
    }],
    requests: [{
        type: Schema.Types.ObjectId,
        ref: 'Request',
        default: []
    }],
    fare: { //solo req cuando isOwner = false
        type: Number,
        req: true
    },
    zone: {
        type: String,
        req: true
    }
});

userSchema.path('pets').required(function() {return this.isOwner === true}, 'Solo dueños pueden agregar mascotas');
userSchema.path('fare').required(function() {return this.isOwner === false}, 'Solo paseadores pueden colocar tarifa');

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
        telephone: Joi.string().required(),
        dni: Joi.number().min(7).max(8).required(),
        password: Joi.string().required().min(6),
        isOwner: Joi.boolean().required(),
        fare: Joi.number().required(),
        zone: Joi.string().required()
    })
    return schema.validate(user)
}

export const UserModel = mongoose.model('User', userSchema);
