import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  retailerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Changed from 'Retailer' to 'User' to match your auth system
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
      values: ['pending', 'shipped', 'delivered', 'cancelled'], // Added 'cancelled' for completeness
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