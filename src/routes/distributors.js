import express from 'express';
import distributorsController from '../controllers/distributorsControllers.js';

const router = express.Router();

router.post('/', distributorsController.createDistributor);
router.get('/', distributorsController.getAllDistributors);
router.get('/:id', distributorsController.getDistributorById);
router.put('/:id', distributorsController.updateDistributor);
router.delete('/:id', distributorsController.deleteDistributor);

export default router;