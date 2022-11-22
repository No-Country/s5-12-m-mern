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
    pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }],
    requests: [{
        type: Schema.Types.ObjectId,
        ref: 'Request'
    }],
    fare: {
        type: Number,
        req: function () {
            return !this.isOwner
        }
    },
    zone: {
        type: String,
        req: true
    }
});

userSchema.statics.encryptPassword = async (password) => {
    try {
        return await bcrypt.hash(password, 10);
    } catch (err) {
        console.log(err);
    }
};

userSchema.statics.comparePassword = async (password, userPassword) => {
    return await bcrypt.compare(password, userPassword);
};

export const validateUser = (user) => {
    const schema = Joi.object({
        fullName: Joi.string().required(),
        email: Joi.string().email().required(),
        telephone: Joi.string().required(),
        dni: Joi.string().min(7).max(8).required(),
        password: Joi.string().required().min(6),
        isOwner: Joi.boolean().required(),
        fare: Joi.when('isOwner', { is: false, then: Joi.number().required() }),
        zone: Joi.string().required(),
        zipCode: Joi.string().required()
    })
    return schema.validate(user)
}

export const UserModel = mongoose.model('users', userSchema);
