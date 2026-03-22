import mongoose from "mongoose";

const farmerSchema = new mongoose.Schema(
  {
    name: {
      type: String, 
      required: true
    },
    location: {
      type: String,
      required: true
    },
    farmSize: {
      type: Number,
      required: true
    },
    produceTypes: {
      type: [String],
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Farmer', farmerSchema);