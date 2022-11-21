import { PetModel } from "../models/Pet.js";

export const getPets = async (req, res, next) => {
  try {
    const totalPets = await PetModel.find();
    res.status(200).json({ message: "Fetched pets successfully", totalPets });
  } catch (error) {
    console.log(error);
  }
};

export const createPet = async (req, res, next) => {
  const specie = req.body.specie;
  const name = req.body.name;
  const age = req.body.age;
  const vaxDate = req.body.vaxDate;
  const description = req.body.description;
  const size = req.body.size;
  const pet = new PetModel({
    specie, name, age, vaxDate, description, size
  })
  try {
    await pet.save()
    res.status(201).json({message: "Mascota creada!", pet})
  } catch (error) {
    console.log(error);
    res.status(400).json({error})
  }
};
