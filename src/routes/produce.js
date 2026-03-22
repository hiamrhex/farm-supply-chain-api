import {Router} from 'express';
import produceController from '../controllers/produceControllers.js';

const router = Router();

// GET /produce -  get all produce with optional category filter (supports ?category=fruit)
// POST /produce - create a new produce
router
    .route('/')
    .get(produceController.getAllProduce)
    .post(produceController.createProduce);

// GET /produce/:id - get a single produce by ID
// PUT /produce/:id - update a produce by ID (full replacement)
// DELETE /produce/:id - delete a produce by ID
router
    .route('/:id')
    .get(produceController.getProduceById)
    .put(produceController.updateProduce)
    .delete(produceController.deleteProduce);

export default router;