import { UserModel } from "../models/User.js"
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
    const { fullName, email, isOwner, telephone, dni, zipCode, password } = req.body

    try {
        const userExists = await UserModel.findOne({ email });
        if (userExists) throw new Error("El email ya se encuentran registrados en la base de datos");

        const newUser = new UserModel({
            fullName,
            email,
            isOwner,
            telephone,
            dni,
            zipCode,
            password: await UserModel.encryptPassword(password)
        })

        const savedUser = await newUser.save()
        res.status(200).send(savedUser)

    } catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        
        const user = await UserModel.findOne({ email })
        if (!user) throw new Error("El usuario o contraseña son incorrectos")

        const passwordMatch = await UserModel.comparePassword(password, user.password);
        if (!passwordMatch) throw new Error("El usuario o contraseña son incorrectos")
        const userData = {
            id: user._id,
            email: user.email,
            fullName: user.fullName
        }
        let dataToken = jwt.sign({userData}, process.env.TOKEN);
        return res.status(200).header("token", dataToken).json({message: "Login Succesfully", userData})
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getUserbyId = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.status(200).send(user)

    } catch (err) {
        res.status(500).send(err);
    }
}

export const editUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).send(user)

    } catch (err) {
        res.status(500).send(err);
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        const passwordMatch = await UserModel.comparePassword(req.body.password, user.password);
        if (!passwordMatch) throw new Error("La contraseña es incorrecta")

        await UserModel.findByIdAndRemove(req.params.id)
        res.status(200).send(user)

    } catch (err) {
        res.status(500).send(err);
    }
}