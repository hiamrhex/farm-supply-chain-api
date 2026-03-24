import * as retailerService from "../services/retailersServices.js";

// GET /retailers
const getAllRetailers = async (req, res, next) => {
    try {
        const retailers = await retailerService.getAllRetailers();
        res.status(200).json({
            success: true,
            count: retailers.length,
            data: retailers
        });
    } catch (error) {
        next(error); 
    }
};

// GET /retailers/:id
const getRetailerById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const retailer = await retailerService.getRetailerById(id);
        if (!retailer) {
            return res.status(404).json({
                success: false,
                message: `Retailer with ID ${id} not found`
            });
        }
        res.status(200).json({
            success: true,
            data: retailer
        });
    } catch (error) {
        next(error);
    }
};

// POST /retailers
const createRetailer = async (req, res, next) => {
    try {
        const { name, location, contactInfo } = req.body;

        if (!name || !location || !contactInfo) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields: name, location, contactInfo"
            });
        }

        const newRetailer = await retailerService.createRetailer({ name, location, contactInfo });

        res.status(201).json({
            success: true,
            message: "Retailer created successfully",
            data: newRetailer
        });
    } catch (error) {
        next(error);
    }
};

// PUT /retailers/:id (NEW)
const updateRetailer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        
        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ success: false, message: 'No data provided to update' });
        }

        const updatedRetailer = await retailerService.updateRetailer(id, updateData);
        if (!updatedRetailer) {
            return res.status(404).json({ success: false, message: `Retailer with ID ${id} not found` });
        }

        res.status(200).json({
            success: true,
            message: 'Retailer updated successfully',
            data: updatedRetailer
        });
    } catch (error) {
        next(error);
    }
};

// DELETE /retailers/:id (NEW)
const deleteRetailer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedRetailer = await retailerService.deleteRetailer(id);
        
        if (!deletedRetailer) {
            return res.status(404).json({ success: false, message: `Retailer with ID ${id} not found` });
        }
        res.status(200).json({
            success: true,
            message: 'Retailer deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

export default {
    getAllRetailers,
    getRetailerById,
    createRetailer,
    updateRetailer,
    deleteRetailer
};