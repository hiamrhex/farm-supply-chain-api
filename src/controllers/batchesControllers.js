import batchesService from '../services/batchesServices.js';

// GET /batches — get all batches
const getAllBatches = async (req, res, next) => {
  try {
    const batches = await batchesService.getAllBatches();

    res.status(200).json({
      success: true,
      count: batches.length,
      data: batches,
    });
  } catch (error) {
    next(error);
  }
};

// GET /batches/:id — get single batch by ID
const getBatchById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const batch = await batchesService.getBatchById(id);

    if (!batch) {
      return res.status(404).json({
        success: false,
        message: `Batch with ID ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      data: batch,
    });
  } catch (error) {
    next(error);
  }
};

// POST /batches — create a new batch
const createBatch = async (req, res, next) => {
  try {
    const { farmerId, produceId, quantity, harvestDate, status } = req.body;

    // Basic validation
    if (!farmerId || !produceId || !quantity || !harvestDate) {
      return res.status(400).json({
        success: false,
        message:
          'Please provide all required fields: farmerId, produceId, quantity, harvestDate',
      });
    }

    const newBatch = await batchesService.createBatch({
      farmerId,
      produceId,
      quantity,
      harvestDate,
      status: status || 'harvested',
    });

    res.status(201).json({
      success: true,
      message: 'Batch created successfully',
      data: newBatch,
    });
  } catch (error) {
    next(error);
  }
};

// PATCH /batches/:id/status — update batch status only
const updateBatchStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a status to update',
      });
    }

    const updatedBatch = await batchesService.updateBatchStatus(id, status);

    if (!updatedBatch) {
      return res.status(404).json({
        success: false,
        message: `Batch with ID ${id} not found`,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Batch status updated successfully',
      data: updatedBatch,
    });
  } catch (error) {
    next(error);
  }
};

// GET /batches/farmer/:farmerId — get all batches by a farmer
const getBatchesByFarmerId = async (req, res, next) => {
  try {
    const { farmerId } = req.params;
    const batches = await batchesService.getBatchesByFarmerId(farmerId);

    res.status(200).json({
      success: true,
      count: batches.length,
      data: batches,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getAllBatches,
  getBatchById,
  createBatch,
  updateBatchStatus,
  getBatchesByFarmerId,
};