import { UserModel } from "../models/User.js"

export const registerUser = async (req, res) => {
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

        const user = await userClass.findByEmail(email);
        if (!user) throw new Error("El usuario o contraseña son incorrectos")

        const passwordMatch = await UserModel.comparePassword(password, user.password)
        if (!passwordMatch) throw new Error("El usuario o contraseña son incorrectos")

        return res.status(200).send({
            username: user.username
        })
    } catch (err) {
        res.status(500).json(err);
    }

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