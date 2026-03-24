import express from 'express';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  getOrdersByRetailer 
} from '../controllers/ordersControllers.js';

const router = express.Router();

router.post('/', createOrder);
router.get('/', getAllOrders);

router.get('/retailer/:retailerId', getOrdersByRetailer);

router.get('/:id', getOrderById);
router.patch('/:id/status', updateOrderStatus);

export default router;
