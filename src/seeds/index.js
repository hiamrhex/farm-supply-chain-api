import mongoose from "mongoose";
import dotenv from "dotenv";

import { seedProduce } from "./produceSeed.js";
import { seedRetailers } from "./retailersSeed.js";
import { seedDistributors } from "./distributorsSeed.js";
import { seedBatches } from "./batchesSeed.js";
import { seedOrders } from "./orderSeed.js";

dotenv.config();

const runSeeds = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected...");

    await seedProduce();
    await seedRetailers();
    await seedDistributors();
    await seedBatches();
    await seedOrders();

    console.log("All data seeded successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error.message);
    process.exit(1);
  }
};

runSeeds();