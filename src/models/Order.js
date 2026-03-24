import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  retailerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Retailer',
    required: [true, 'Retailer ID is required']
  },
  produceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produce',
    required: [true, 'Produce ID is required']
  },
  quantity: {
    type: Number,
    required: [true, 'Order quantity is required'],
    min: [1, 'Quantity must be at least 1']
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'shipped', 'delivered'],
      message: '{VALUE} is not a valid order status'
    },
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Order = mongoose.model('Order', orderSchema);

export default Order;