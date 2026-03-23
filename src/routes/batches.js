import { Router } from 'express';
import batchesController from '../controllers/batchesController.js';

const router = Router();

// GET /batches          — get all batches
// POST /batches         — create new batch
router
  .route('/')
  .get(batchesController.getAllBatches)
  .post(batchesController.createBatch);

// GET /batches/farmer/:farmerId — get batches by farmer
router
  .route('/farmer/:farmerId')
  .get(batchesController.getBatchesByFarmerId);

// GET /batches/:id      — get batch by ID
router
  .route('/:id')
  .get(batchesController.getBatchById);

// PATCH /batches/:id/status — update batch status
router
  .route('/:id/status')
  .patch(batchesController.updateBatchStatus);

export default router;