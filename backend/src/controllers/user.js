import { UserModel } from "../models/User.js"

export const registerUser = async (req, res) => {
    const { fullName, email, isOwner, telephone, dni, zipCode, password } = req.body

    // zona de paseos, precio por hora y paseos realizados
    try {
        const userExists = await this.model.findOne({ email });
        if (userExists) throw new Error("El email ya se encuentran registrados en la base de datos");

        const newUser = new UserModel({
            fullName,
            email,
            telephone,
            dni,
            zipCode,
            password: await UserModel.encryptPassword(password)
        })

        const savedUser = await newUser.save()

        res.status(200).send(savedUser)
    } catch (err) {
        res.status(500).send(err)
    }
}

export const loginUser = async (req, res) => {

}

export const getUserbyId = async (req, res) => {
    const user = await UserModel.findById(req.params.id)

    res.status(200).send(user)
}

export const editUser = async (req, res) => {
    const user = await UserModel.findById(req.params.id)

    res.status(200).send(user)
}

export const deleteUser = async (req, res) => {
    const user = await UserModel.findByIdAndDelete(req.params.id)

    res.status(200).send(user)
}