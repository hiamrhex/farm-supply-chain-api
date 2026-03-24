import express from 'express';
import retailersController from '../controllers/retailersControllers.js';

const router = express.Router();

// Define routes
router.get('/', retailersController.getAllRetailers);

router.get('/:id', retailersController.getRetailerById);

router.post('/', retailersController.createRetailer);

router.put('/:id', retailersController.updateRetailer);

router.delete('/:id', retailersController.deleteRetailer);

export default router;