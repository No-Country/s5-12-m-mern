import { User } from "../models/User.js"
import jwt from "jsonwebtoken";
import awsFileDelete from "../utils/awsFileHandle/awsFileDelete.js"
import awsFilePost from "../utils/awsFileHandle/awsFilePost.js"
import awsFileGet from "../utils/awsFileHandle/awsFileGet.js"

export const createUser = async (req, res) => {
    try {
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) throw new Error("El email ya se encuentra registrado en la base de datos")

        const userProps = Object.assign({}, req.body)
        userProps.password = await User.encryptPassword(userProps.password)

        const newUser = new User(userProps)

        const savedUser = await newUser.save()
        res.status(200).json(savedUser)

    } catch (err) {
        console.log(err)
        res.status(500).json(err.message)
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email }).select({ fullName: 1, email: 1, password: 1 })
        if (!user) throw new Error("El usuario o contraseña son incorrectos")

        const passwordMatch = await User.comparePassword(password, user.password);
        if (!passwordMatch) throw new Error("El usuario o contraseña son incorrectos")

        const userData = {
            id: user._id.toString(),
            email: user.email,
            fullName: user.fullName
        }

        let dataToken = jwt.sign({ userData }, process.env.TOKEN);

        return res.status(200).json({ user: userData, token: dataToken })
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const getUserbyId = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean()
        if (user.img) user.img = await awsFileGet(user.img)

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const addImg = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if (user.img) await awsFileDelete(user.img)
        user.img = await awsFilePost(req.file)
        await user.save()

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const editUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err.message)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select({ password: 1 })
        console.log(req.body.password)
        if (!req.body.password) throw new Error("Ingrese su contraseña para confirmar el borrado de la cuenta")
        const passwordMatch = await User.comparePassword(req.body.password, user.password);
        if (!passwordMatch) throw new Error("La contraseña es incorrecta")

        if (user.img) await awsFileDelete(user.img)
        await User.findByIdAndRemove(req.params.id)
        res.status(200).json({ message: "Usuario eliminado correctamente", id: user._id })

    } catch (err) {
        res.status(500).json(err.message)
    }
}