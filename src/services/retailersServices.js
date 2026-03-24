import Retailer from '../models/Retailer.js';

// GET all retailers from database
export const getAllRetailers = async () => {
    return await Retailer.find();
};

// GET a single retailer by their ID
export const getRetailerById = async (id) => {
    return await Retailer.findById(id);
};

// POST a new retailer
export const createRetailer = async (retailerData) => {
    return await Retailer.create(retailerData);
};

// PUT/update an existing retailer
export const updateRetailer = async (id, updateData) => {
    return await Retailer.findByIdAndUpdate(id, updateData, {
        new: true, 
        runValidators: true 
    });
};

// DELETE a retailer
export const deleteRetailer = async (id) => {
    return await Retailer.findByIdAndDelete(id);
};