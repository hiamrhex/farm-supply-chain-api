import express from 'express'
import {
  getAllFarmersController,
  getFarmerByIdController,
  createFarmerController,
  updateFarmerController,
  deleteFarmerController
} from '../controllers/farmersControllers.js'
import { protect, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router()

// GET all farmers (Accessible by any logged-in user)
router.get('/', protect, getAllFarmersController)

// GET single farmer (Accessible by any logged-in user)
router.get('/:id', protect, getFarmerByIdController)

// CREATE farmer (Restricted to Admin only)
router.post('/', protect, authorize('admin'), createFarmerController)

// UPDATE farmer (Restricted to Admin only)
router.put('/:id', protect, authorize('admin'), updateFarmerController)

// DELETE farmer (Restricted to Admin only)
router.delete('/:id', protect, authorize('admin'), deleteFarmerController)

export default router