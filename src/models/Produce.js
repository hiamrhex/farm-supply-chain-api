import mongose from'mongoose';

const produceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    unitPrice: {
      type: Number,
      required: true
    },
    availableQuantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Produce', produceSchema);