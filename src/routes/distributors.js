import express from 'express';
import {
  createDistributor,
  getAllDistributors,
  getDistributorById,
  updateDistributor,
  deleteDistributor,
} from '../controllers/distributorsControllers.js';

const router = express.Router();

router.post('/', createDistributor);
router.get('/', getAllDistributors);
router.get('/:id', getDistributorById);
router.put('/:id', updateDistributor);
router.delete('/:id', deleteDistributor);

export default router;