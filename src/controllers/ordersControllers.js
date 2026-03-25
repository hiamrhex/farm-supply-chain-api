import * as orderService from '../services/ordersServices.js';

export const createOrder = async (req, res, next) => {
  try {
    // Automatically associate the order with the logged-in retailer
    const order = await orderService.createOrder({
      ...req.body,
      retailerId: req.user.id 
    });
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await orderService.getOrderById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (err) {
    next(err);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const updated = await orderService.updateOrderStatus(
      req.params.id,
      req.body.status
    );

    if (!updated) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const getOrdersByRetailer = async (req, res, next) => {
  try {
    const orders = await orderService.getOrdersByRetailer(req.params.retailerId);
    res.json(orders);
  } catch (err) {
    next(err);
  }
};