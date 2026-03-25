import { Router } from 'express';
import batchesController from '../controllers/batchesControllers.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = Router();

// GET /batches          â€” get all batches
// POST /batches         â€” create new batch
router
  .route('/')
  .get(protect, batchesController.getAllBatches)
  .post(protect, authorize('admin', 'farmer'), batchesController.createBatch);

// GET /batches/farmer/:farmerId â€” get batches by farmer
router
  .route('/farmer/:farmerId')
  .get(protect, batchesController.getBatchesByFarmerId);

// GET /batches/:id      â€” get batch by ID
router
  .route('/:id')
  .get(protect, batchesController.getBatchById);

// PATCH /batches/:id/status â€” update batch status
router
  .route('/:id/status')
  .patch(protect, authorize('admin', 'farmer', 'distributor'), batchesController.updateBatchStatus);

export default router;