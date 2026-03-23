import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Batch from '../models/Batch.js';

dotenv.config();

const farmerIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const produceIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

const batchesData = [
  { farmerId: farmerIds[0], produceId: produceIds[0], quantity: 500, harvestDate: '2025-01-10', status: 'harvested' },
  { farmerId: farmerIds[0], produceId: produceIds[1], quantity: 300, harvestDate: '2025-01-12', status: 'processing' },
  { farmerId: farmerIds[0], produceId: produceIds[2], quantity: 700, harvestDate: '2025-01-15', status: 'in-transit' },
  { farmerId: farmerIds[0], produceId: produceIds[3], quantity: 200, harvestDate: '2025-01-18', status: 'delivered' },
  { farmerId: farmerIds[1], produceId: produceIds[0], quantity: 450, harvestDate: '2025-02-01', status: 'harvested' },
  { farmerId: farmerIds[1], produceId: produceIds[1], quantity: 600, harvestDate: '2025-02-05', status: 'processing' },
  { farmerId: farmerIds[1], produceId: produceIds[4], quantity: 350, harvestDate: '2025-02-08', status: 'in-transit' },
  { farmerId: farmerIds[1], produceId: produceIds[2], quantity: 800, harvestDate: '2025-02-12', status: 'delivered' },
  { farmerId: farmerIds[2], produceId: produceIds[0], quantity: 150, harvestDate: '2025-03-01', status: 'spoiled' },
  { farmerId: farmerIds[2], produceId: produceIds[3], quantity: 900, harvestDate: '2025-03-05', status: 'harvested' },
  { farmerId: farmerIds[2], produceId: produceIds[4], quantity: 250, harvestDate: '2025-03-10', status: 'processing' },
  { farmerId: farmerIds[2], produceId: produceIds[1], quantity: 400, harvestDate: '2025-03-14', status: 'in-transit' },
  { farmerId: farmerIds[3], produceId: produceIds[2], quantity: 550, harvestDate: '2025-04-01', status: 'delivered' },
  { farmerId: farmerIds[3], produceId: produceIds[0], quantity: 320, harvestDate: '2025-04-05', status: 'harvested' },
  { farmerId: farmerIds[3], produceId: produceIds[4], quantity: 480, harvestDate: '2025-04-09', status: 'processing' },
  { farmerId: farmerIds[3], produceId: produceIds[3], quantity: 670, harvestDate: '2025-04-13', status: 'in-transit' },
  { farmerId: farmerIds[4], produceId: produceIds[1], quantity: 190, harvestDate: '2025-05-01', status: 'harvested' },
  { farmerId: farmerIds[4], produceId: produceIds[2], quantity: 720, harvestDate: '2025-05-06', status: 'delivered' },
  { farmerId: farmerIds[4], produceId: produceIds[0], quantity: 310, harvestDate: '2025-05-10', status: 'processing' },
  { farmerId: farmerIds[4], produceId: produceIds[4], quantity: 860, harvestDate: '2025-05-15', status: 'in-transit' },
  { farmerId: farmerIds[0], produceId: produceIds[4], quantity: 140, harvestDate: '2025-06-01', status: 'recalled' },
  { farmerId: farmerIds[1], produceId: produceIds[3], quantity: 430, harvestDate: '2025-06-05', status: 'harvested' },
  { farmerId: farmerIds[2], produceId: produceIds[2], quantity: 560, harvestDate: '2025-06-10', status: 'delivered' },
  { farmerId: farmerIds[3], produceId: produceIds[1], quantity: 380, harvestDate: '2025-06-15', status: 'spoiled' },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected for seeding...');

    // Clear existing batch data
    await Batch.deleteMany({});
    console.log('Existing batch data cleared.');

    // Insert seed data
    const inserted = await Batch.insertMany(batchesData);
    console.log(`${inserted.length} batch records inserted successfully.`);

    // Log the farmer IDs for testing
    console.log('\n--- Farmer IDs for testing /batches/farmer/:farmerId ---');
    farmerIds.forEach((id, index) => {
      console.log(`  Farmer ${index + 1}: ${id}`);
    });

    console.log('\n--- Produce IDs used ---');
    produceIds.forEach((id, index) => {
      console.log(`  Produce ${index + 1}: ${id}`);
    });

    await mongoose.connection.close();
    console.log('\nDatabase connection closed.');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error.message);
    process.exit(1);
  }
};

seedDB();