import mongoose from 'mongoose';

const distributorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Distributor name is required'],
      trim: true,
    },

    region: {
      type: String,
      required: [true, 'Region is required'],
      trim: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
  }
);

const Distributor = mongoose.model('Distributor', distributorSchema);

export default Distributor;