import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Produce name is required"],
            trim: true,
        },

        category: {
            type: String,
            required: [true, "Produce category is required"],
            trim: true,
            lowercase: true,
            enum: {
                values: ["fruit", "vegetable", "grain", "legume", "tuber", "spice", "herb", "nut", "cereal", "oilseed"],
                message: "Invalid category. Must be one of: fruit, vegetable, grain, legume, tuber, spice, herb, nut, cereal, oilseed"
            }
        },

        unitPrice: {
            type: Number,
            required: [true, "Unit price is required"],
            min: [0, "Unit price cannot be negative"]
        },

        availableQuantity: {
            type: Number,
            required: [true, "Available quantity is required"],
            min: [0, "Available quantity cannot be negative"],
            default: 0,
        },

        farmerId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Produce must belong to a farmer"]
        },
    },
    {
        timestamps: true,
    }
);

const Produce = mongoose.model("Produce", productSchema);

export default Produce;