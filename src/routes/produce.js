import {Router} from 'express';
import produceController from '../controllers/produceControllers.js';
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = Router();

// GET /produce -  get all produce with optional category filter (supports ?category=fruit)
// POST /produce - create a new produce
router
    .route('/')
    .get(protect, produceController.getAllProduce)
    .post(protect, authorize('admin', 'farmer'), produceController.createProduce);

// GET /produce/:id - get a single produce by ID
// PUT /produce/:id - update a produce by ID (full replacement)
// DELETE /produce/:id - delete a produce by ID
router
    .route('/:id')
    .get(protect, produceController.getProduceById)
    .put(protect, authorize('admin', 'farmer'), produceController.updateProduce)
    .delete(protect, authorize('admin', 'farmer'), produceController.deleteProduce);

export default router;