import Farmer from '../models/Farmer.js'

// GET all farmers from database
export const getAllFarmers = async () => {
  return await Farmer.find();
}

// GET single farmer by ID
export const getFarmerById = async (id) => {
  return await Farmer.findById(id);
}

// CREATE new farmer
export const createFarmer = async (data) => {
  return await Farmer.create(data)
}

// UPDATE existing farmer by ID
export const updateFarmer = async (id, data) => {
  return await Farmer.findByIdAndUpdate(id, data, { new: true });
}

// DELETE farmer by ID
export const deleteFarmer = async (id) => {
  return await Farmer.findByIdAndDelete(id);
}