import Order from '../models/Order.js';
import Produce from '../models/Produce.js';

export const createOrder = async ({ retailerId, produceId, quantity }) => {
  const produce = await Produce.findById(produceId);
  if (!produce) throw new Error('Produce not found');

  if (produce.availableQuantity < quantity) {
    throw new Error('Insufficient stock');
  }

  produce.availableQuantity -= quantity;
  await produce.save();

  const order = await Order.create({
    retailerId,
    produceId,
    quantity,
  });

  return order;
};