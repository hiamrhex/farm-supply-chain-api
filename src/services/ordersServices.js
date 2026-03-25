import Order from '../models/Order.js';
import Produce from '../models/Produce.js';

//Custom error helper to attach status codes

const createError = (message, statusCode) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

export const createOrder = async (data) => {

  const pId = data.produceId || data.produce;
  const rId = data.retailerId || data.retailer;

  if (!pId || !rId) {
    throw createError('Produce ID and Retailer ID are required', 400);
  }

  // verify that produce and retailer exists
  const produce = await Produce.findById(pId);
  if (!produce) {
    throw createError('Produce not found in database', 404);
  }

  if (produce.availableQuantity < data.quantity) {
    throw createError(`Insufficient stock. Available: ${produce.availableQuantity}`, 400);
  }

  // deduct ordered quantity from produce stock
  produce.availableQuantity -= data.quantity;
  await produce.save();

  // create order
  const order = await Order.create({
    ...data,
    produceId: pId,
    retailerId: rId
  });

  return order;
};

export const getAllOrders = async () => {
  // populate retailer name and produce name in the order response
  return await Order.find()
    .populate('retailerId', 'email role') // Changed 'name location' to fields that exist in User
    .populate('produceId', 'name unitPrice'); // Changed 'price' to 'unitPrice' to match Produce model
};

export const getOrderById = async (id) => {
  const order = await Order.findById(id)
    .populate('retailerId', 'email role')
    .populate('produceId');

  if (!order) throw createError('Order not found', 404);
  return order;
};

export const updateOrderStatus = async (id, status) => {
  const updated = await Order.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );
  if (!updated) throw createError('Order not found', 404);
  return updated;
};

export const getOrdersByRetailer = async (retailerId) => {
  return await Order.find({ retailerId }).populate('produceId');
};

export const deleteOrder = async (id) => {
  const deleted = await Order.findByIdAndDelete(id);
  if (!deleted) throw createError('Order not found', 404);
  return deleted;
};