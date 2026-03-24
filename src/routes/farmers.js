import express from 'express'
import {
  getAllFarmersController,
  getFarmerByIdController,
  createFarmerController,
  updateFarmerController,
  deleteFarmerController
} from '../controllers/farmersControllers.js'

const router = express.Router()

// GET all farmers
router.get('/', getAllFarmersController)


// GET single farmer
router.get('/:id', getFarmerByIdController)

// CREATE farmer
router.post('/', createFarmerController)

// UPDATE farmer
router.put('/:id', updateFarmerController)

// DELETE farmer
router.delete('/:id', deleteFarmerController)

export default router