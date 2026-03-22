import produceService from "../services/produceService.js";

// GET /produce - get all produce 
// GET /produce?category=fruit - filter by category 
const getAllProduce = async (req, res, next) => {
    try {
        const { category } = req.query;
        const produce = await produceService.getAllProduce(category);
        
        res.status(200).json({
            success: true,
            count: produce.length,
            data: produce
        });
    } catch (error) {
        next(error);
    }
};

// GET /produce/:id - get a single produce by ID
const getProduceById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const produce = await produceService.getProduceById(id);

        if (!produce) {
            res.status(404).json({
                success: false,
                message: `Produce with ID ${id} not found `
            });
        }

        res.status(200).json({
            success: true,
            data: produce
        });
    } catch (error) {
        next(error);
    }
};

// POST /produce - create a new produce
const createProduce = async (req, res, next) => {
    try {
        const { name, category, unitPrice, availableQuantity } = req.body;

        if (!name || !category || !unitPrice || !availableQuantity) {
            res.status(400).json({
                success: false,
                message: "Please provide all required fields: name, category, unitPrice, availableQuantity"
            });
        }

        const newProduce = await produceService.createProduce({name, category, unitPrice, availableQuantity});

        res.status(201).json({
            success: true,
            message: "Produce created successfully",
            data: newProduce
        });
    } catch (error) {
        next(error);
    }
};

// PUT /produce/:id - update a produce by ID
const updateProduce = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateProduceData = req.body;

        if (Object.keys(updateProduceData).length === 0) {
            res.status(400).json({
                success: false,
                message: "Please provide at least one field to update"
            });
        }

        const updateProduce = await produceService.updateProduce(id, updateProduceData);

        if (!updateProduce) {
            res.status(404).json({
                success: false,
                message: `Produce with ID ${id} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: "Produce updated successfully",
            data: updateProduce
        });
    
    } catch (error) {
        next(error);
    }
};     

// DELETE /produce/:id - delete a produce by ID
const deleteProduce = async (req, res, next) => {
    try {
        const {id} = req.params;
        const deletedProduce = await produceService.deleteProduce(id);

        if (!deletedProduce) {
            res.status(404).json({
                success: false,
                message: `Produce with ID ${id} not found`
            });

            res.status(200).json({
                success: true,
                message: "Produce deleted successfully",
                data: deletedProduce
            });
        }
    } catch (error) {
        next(error);
    }
};

export default {
    getAllProduce,
    getProduceById,
    createProduce,
    updateProduce,
    deleteProduce
};