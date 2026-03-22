import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    retailerId: {
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
      ref: 'Retailer' 
    },
    produceId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Produce' 
    },
    quantity: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: 'pending',       
      enum: ['pending', 'shipped', 'delivered'] 
    }
  },
  { timestamps: true }
);

export default mongoose.model('Order', orderSchema);