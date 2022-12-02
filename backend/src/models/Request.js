import mongoose, { Schema } from "mongoose";
import Joi from "joi";

const requestSchema = new mongoose.Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    petId: [{
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Pet',
    }],
    walkerId: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    zone: {
        type: String,
        require: true
    },
    fare: {
        type: Number,
        require: true
    },
    requestStart: {
        type: Schema.Types.Date,
        require: true
    },
    requestEnd: {
        type: Schema.Types.Date,
        require: true
    },
    rating: {
        type: Number | undefined,
        default: undefined,
        min: 1,
        max: 5
    },
    state: {
        type: String,
        enum: ['TO_DO', 'IN_PROGRESS', 'DONE'],
        default: 'TO_DO'
    }
}, { timestamps: true });

export const validateRequestPost = (request) => {
    const schema = Joi.object({
        ownerId: Joi.string().required(),
        petId: Joi.string().required(),
        walkerId: Joi.string().required(),
        zone: Joi.string().required(),
        fare: Joi.number().required(),
        requestStart: Joi.date().required(),
        requestEnd: Joi.date().required()
    })
    return schema.validate(request)
}

export const validateRequestPut = (request) => {
    const schema = Joi.object({
        ownerId: Joi.string(),
        petId: Joi.string(),
        walkerId: Joi.string(),
        zone: Joi.string(),
        fare: Joi.number(),
        requestStart: Joi.date(),
        requestEnd: Joi.date()
    })
    return schema.validate(request)
}

export const Request = mongoose.model('Request', requestSchema);
