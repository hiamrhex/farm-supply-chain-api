import Order from '../models/Order.js';
import Produce from '../models/Produce.js';

export const createOrder = async (data) => {
  const produce = await Produce.findById(data.produceId);
  if (!produce) throw new Error('Produce not found');

  if (produce.availableQuantity < data.quantity) {
    throw new Error('Insufficient stock');
  }

  produce.availableQuantity -= data.quantity;
  await produce.save();

  const order = await Order.create(data);
  return order;
};

export const getAllOrders = async () => {
  return await Order.find().populate('retailerId').populate('produceId');
};

export const getOrderById = async (id) => {
  const order = await Order.findById(id).populate('retailerId').populate('produceId');
  if (!order) throw new Error('Order not found');
  return order;
};

export const updateOrderStatus = async (id, status) => {
  const updated = await Order.findByIdAndUpdate(
    id, 
    { status }, 
    { new: true, runValidators: true }
  );
  if (!updated) throw new Error('Order not found');
  return updated;
};

export const getOrdersByRetailer = async (retailerId) => {
  return await Order.find({ retailerId }).populate('produceId');
};

export const deleteOrder = async (id) => {
  const deleted = await Order.findByIdAndDelete(id);
  if (!deleted) throw new Error('Order not found');
  return deleted;
};