import mongoose from 'mongoose';

const batchSchema = new mongoose.Schema(
  {
    farmerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Changed to User to match your RBAC setup
      required: [true, 'Farmer ID is required'],
    },
    produceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Produce',
      required: [true, 'Produce ID is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    harvestDate: {
      type: Date,
      required: [true, 'Harvest date is required'],
    },
    status: {
      type: String,
      required: [true, 'Status is required'],
      trim: true,
      lowercase: true,
      enum: {
        values: [
          'harvested',
          'processing',
          'in-transit',
          'delivered',
          'spoiled',
          'recalled',
        ],
        message: '{VALUE} is not a valid batch status',
      },
      default: 'harvested',
    },
  },
  {
    timestamps: true,
  }
);

const Batch = mongoose.model('Batch', batchSchema);

export default Batch;