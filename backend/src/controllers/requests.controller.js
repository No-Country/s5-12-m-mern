import { PetModel } from "../models/Pet.js"
import { Request } from "../models/Request.js"
import { User } from "../models/User.js"

export const createRequest = async (req, res) => {
    const { ownerId, petId, walkerId } = req.body
    try {
        const owner = await User.findById(ownerId)
        if (!owner) throw new Error("ID de dueño/a inválido")
        const walker = await User.findById(walkerId)
        if (!walker) throw new Error("ID de paseador/a inválido")
        const pet = await PetModel.findById(petId)
        if (!pet) throw new Error("ID de paseador/a inválido")

        const newRequest = new Request(req.body)
        const savedRequest = await newRequest.save()

        return res.status(200).json(savedRequest)
    } catch (err) {
        res.status(403).json(err)
    }
}

export const getRequestById = async (req, res) => {
    try {
        const request = await Request.findById(req.params.id)
        res.status(200).json(request)

    } catch (err) {
        res.status(500).json(err);
    }
}

export const getAllUserRequests = async (req, res) => {
    try {
        const user = await Request.findById(req.params.user_id).populate('requests')
        res.status(200).json(user.requests)

    } catch (err) {
        res.status(500).json(err);
    }
}

export const setRequestState = async (req, res) => {

    const { state, rating } = req.body

    try {
        const request = await Request.findByIdAndUpdate(req.params.id, { state, rating }, { new: true })

    } catch (err) {
        res.status(500).json(err);
    }
}

export const deleteRequest = async (req, res) => {
    try {
        const deletedRequest = await Request.findByIdAndRemove(req.params.id)
        res.status(200).json(deletedRequest)

    } catch (err) {
        res.status(500).json(err);
    }
}