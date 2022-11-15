import mongoose from "mongoose"
import { UserModel } from "../models/User.js"

const demousr = [
    {
        id: "1234",
        type: "Owner",
        name: "Felipe Calderon",
        adress: "Temuco, Chile",
        mail: "felipe.calderon321@gmail.com",
        pets: ["12312421", "12123242", "31231233"],
        history: "12412312"
    },
    {
        id: "1235",
        type: "Owner",
        name: "Luca",
        adress: "Temuco, Argentina",
        mail: "luca@gmail.com",
        pets: ["123124221", "132123242", "312231233"],
        history: "312412312"
    }
]

export const createUser = async (req, res) => {
    const { username, fullName, email, password } = req.body

    const newUser = new UserModel({
        username,
        fullName,
        email,
        password: await UserModel.encryptPassword(password)
    })

    await newUser.save()

    res.status(200).send({})
}

export const getUserbyId = async (req, res) => {
    const user = await UserModel.findById(req.params.id)

    res.status(200).send(user)
}