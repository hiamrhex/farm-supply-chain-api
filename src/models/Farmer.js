import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String, 
      required: [true, 'Name is required'],
      trim: true
    },
    location: {
      type: String,
      required: [true, 'Location is required'],
      trim: true
    },
    farmSize: {
      type: Number,
      required: [true, 'Farm size is required'],
      min: [0, 'Farm size cannot be negative'],
    },
    produceTypes: {
      type: [String],
      required: [true, 'Produce types are required'],
      default: []
    }
  },
  { timestamps: true }
);

export default mongoose.model('Farmer', farmerSchema);