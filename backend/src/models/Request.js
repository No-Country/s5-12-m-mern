import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const requestSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    petId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Pet',
    },
    // walkerId: { VER BIEN COMO DIFRENCIAR LOS ID
    //     type: Schema.Types.ObjectId,
    //     require: true,
    //     ref: 'User',
    // },
    zone: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    fare: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },

}, {timestamps: true});

export const validateRequest = (request) => {
    const schema = Joi.object({
        userId: Joi.ObjectId().required(),
        petId: Joi.ObjectId().required(),
        zone: Joi.ObjectId().required(),
        fare: Joi.ObjectId(),
    })
    return schema.validate(request)
}

export const RequestModel = mongoose.model('Request', requestSchema);
