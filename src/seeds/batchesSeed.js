import Batch from '../models/Batch.js';
import Farmer from '../models/Farmer.js';
import Produce from '../models/Produce.js';

export const seedBatches = async () => {
  try {
    console.log('Preparing to seed batches...');

    const farmers = await Farmer.find();
    const produceList = await Produce.find();

    if (farmers.length === 0 || produceList.length === 0) {
      console.log('Cannot seed Batches yet!');
      console.log('Farmers and Produce must be seeded first.');
      return;
    }

    console.log('Clearing old batch data...');
    await Batch.deleteMany({});

    const statuses = ['harvested', 'processing', 'in-transit', 'delivered', 'spoiled', 'recalled'];
    const batchesData = [];

    for (let i = 0; i < 24; i++) {
      const randomFarmer = farmers[Math.floor(Math.random() * farmers.length)];
      const randomProduce = produceList[Math.floor(Math.random() * produceList.length)];
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      const randomQty = Math.floor(Math.random() * 800) + 100;

      batchesData.push({
        farmerId: randomFarmer._id,
        produceId: randomProduce._id,
        quantity: randomQty,
        harvestDate: new Date(2025, Math.floor(Math.random() * 6), Math.floor(Math.random() * 28) + 1), // Random date in first half of 2025
        status: randomStatus
      });
    }

    const inserted = await Batch.insertMany(batchesData);
    console.log(`${inserted.length} batch records inserted successfully.`);

  } catch (error) {
    console.error('Error seeding batches:', error.message);
    throw error; 
  }
};