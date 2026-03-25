import Batch from '../models/Batch.js';

// GET all batches
const getAllBatches = async () => {
  const batches = await Batch.find()
    .populate('farmerId', 'email role')
    .populate('produceId', 'name category unitPrice');
  return batches;
};

// GET a single batch by ID
const getBatchById = async (id) => {
  const batch = await Batch.findById(id)
    .populate('farmerId', 'email role')
    .populate('produceId', 'name category unitPrice');
  return batch;
};

// CREATE a new batch
const createBatch = async (data) => {
  const newBatch = await Batch.create(data);
  return newBatch;
};

// PATCH â€” update only the status of a batch
const updateBatchStatus = async (id, status) => {
  const updatedBatch = await Batch.findByIdAndUpdate(
    id,
    { status },
    {
      new: true,
      runValidators: true,
    }
  )
    .populate('farmerId', 'email role')
    .populate('produceId', 'name category unitPrice');
  return updatedBatch;
};

// GET all batches by a specific farmer
const getBatchesByFarmerId = async (farmerId) => {
  const batches = await Batch.find({ farmerId })
    .populate('farmerId', 'email role')
    .populate('produceId', 'name category unitPrice');
  return batches;
};

export default {
  getAllBatches,
  getBatchById,
  createBatch,
  updateBatchStatus,
  getBatchesByFarmerId,
};