import Produce from "../models/Produce.js";

// GET all produce with optional category filter
const getAllProduce = async (category) => {
    const filter = {};

    if (category) {
        filter.category = category.toLowerCase();
    }

    const produce = await Produce.find(filter);
    return produce;
};

// GET a single produce by ID
const getProduceById = async (id) => {
    const produce = await Produce.findById(id);
    return produce;
};

// CREATE a new produce
const createProduce = async (produceData) => {
    const newProduce = await Produce.create(produceData);
    return newProduce;
};

// UPDATE a produce by ID (with full replacement of the provided fields)
const updateProduce = async (id, produceData) => {
    const updatedProduce = await Produce.findByIdAndUpdate(id, produceData, {
        new: true, // return the updated document
        runValidators: true, // ensure the update adheres to the schema validation
    });
    return updatedProduce;
};

// DELETE a produce by ID
const deleteProduce = async (id) => {
    const deletedProduce = await Produce.findByIdAndDelete(id);
    return deletedProduce;
};


export default {
    getAllProduce,
    getProduceById,
    createProduce,
    updateProduce,
    deleteProduce,
};