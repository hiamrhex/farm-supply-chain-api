import produceService from "../services/produceServices.js";

// GET /produce
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

// GET /produce/:id
const getProduceById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const produce = await produceService.getProduceById(id);

        if (!produce) {
            return res.status(404).json({
                success: false,
                message: `Produce with ID ${id} not found`
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

// POST /produce
const createProduce = async (req, res, next) => {
    try {
        const { name, category, unitPrice, availableQuantity } = req.body;

        if (!name || !category || !unitPrice || !availableQuantity) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields: name, category, unitPrice, availableQuantity"
            });
        }

        // Use the ID from the protect middleware to link this produce to the logged-in user
        const newProduce = await produceService.createProduce({ 
            name, 
            category, 
            unitPrice, 
            availableQuantity,
            farmerId: req.user.id 
        });

        res.status(201).json({
            success: true,
            message: "Produce created successfully",
            data: newProduce
        });
    } catch (error) {
        next(error);
    }
};

// PUT /produce/:id
const updateProduce = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateProduceData = req.body;

        if (Object.keys(updateProduceData).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide at least one field to update"
            });
        }

        const updatedProduce = await produceService.updateProduce(id, updateProduceData);

        if (!updatedProduce) {
            return res.status(404).json({
                success: false,
                message: `Produce with ID ${id} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: "Produce updated successfully",
            data: updatedProduce
        });
    } catch (error) {
        next(error);
    }
};

// DELETE /produce/:id
const deleteProduce = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduce = await produceService.deleteProduce(id);

        if (!deletedProduce) {
            return res.status(404).json({
                success: false,
                message: `Produce with ID ${id} not found`
            });
        }

        res.status(200).json({
            success: true,
            message: "Produce deleted successfully",
            data: deletedProduce
        });
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