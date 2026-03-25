import express from 'express';
import { protect, authorize } from '../middlewares/authMiddleware.js';
import {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  getOrdersByRetailer
} from '../controllers/ordersControllers.js';

const router = express.Router();

// Only retailers and admins can create an order
router.post('/', protect, authorize('retailer', 'admin'), createOrder);

// Only authenticated users can view the order history
router.get('/', protect, getAllOrders);

// View orders for a specific retailer (Protected)
router.get('/retailer/:retailerId', protect, getOrdersByRetailer);

// View a single order by ID (Protected)
router.get('/:id', protect, getOrderById);

// Only admins, retailers, or distributors can update order status (e.g., to 'shipped')
router.patch('/:id/status', protect, authorize('admin', 'retailer', 'distributor'), updateOrderStatus);

export default router;