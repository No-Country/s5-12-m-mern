import { PetModel } from "../models/Pet.js";

export const getPets = async (req, res, next) => {
  try {
    const totalPets = await PetModel.find();
    res.status(200).json({ message: "Fetched pets successfully", totalPets });
  } catch (error) {
    console.log(error);
  }
};

export const getPetById = async (req, res, next) => {
  const petId = req.params.petId;
  try {
    const fetchedPet = await PetModel.findById(petId);
    res.status(200).json({ message: "Fetched pet successfully", fetchedPet });
  } catch (error) {
    res.status(400).json({ error, message: "Error al buscar mascota" });
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
    specie,
    name,
    age,
    vaxDate,
    description,
    size,
  });
  try {
    await pet.save();
    res.status(201).json({ message: "Mascota creada!", pet });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error, message: "Error al crear mascota" });
  }
};

export const updatePet = async (req, res, next) => {
  const petId = req.params.petId;
  const specie = req.body.specie;
  const name = req.body.name;
  const age = req.body.age;
  const vaxDate = req.body.vaxDate;
  const description = req.body.description;
  const size = req.body.size;
  try {
    const pet = await PetModel.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }
    // if (pet.creator._id.toString() !== req.userId) { para cuando haya usuario
    //   return res.status(404).json({ message: "No autorizxado" });
    // }
    pet.specie = specie;
    pet.name = name;
    pet.age = age;
    pet.vaxDate = vaxDate;
    pet.description = description;
    pet.size = size;
    const result = await pet.save();
    res.status(200).json({ message: "Mascota actualizada!", pet: result });
  } catch (error) {
    res.status(400).json({ message: "No se pudo actualizar la mascota" });
    next(error);
  }
};

export const deletePet = async (req, res, next) => {
  const petId = req.params.petId;
  try {
    const pet = await PetModel.findById(petId);
    if (!pet) {
      return res.status(404).json({ message: "Mascota no encontrada" });
    }
    // if (pet.creator._id.toString() !== req.userId) { para cuando haya usuario
    //   return res.status(404).json({ message: "No autorizxado" });
    // }
    await PetModel.findByIdAndDelete(petId);
    res.status(200).json({ message: "Mascota eliminada" });
  } catch (error) {
    res.status(400).json({ message: "No se pudo eliminar la mascota" });
  }
};
