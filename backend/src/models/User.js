import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Joi from "joi";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verToken: String,
    role: {
        type: String,
        default: "user"
    },
    pets: [{
        type: Schema.Types.ObjectId,
        ref: 'Pet'
    }],
    record: [{
        type: Schema.Types.ObjectId,
        ref: 'Request'
    }]
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
        address: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6),
        role: Joi.string().required(),
        pets: [Joi.ObjectId()],
        record: [Joi.ObjectId()]
    })
    return schema.validate(user)
}

export const UserModel = mongoose.model('users', userSchema);
