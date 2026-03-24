import Distributor from '../models/Distributor.js';

const distributorsData = [
  { name: 'AgroLogistics West', region: 'South West' },
  { name: 'Savannah Freight', region: 'North West' },
  { name: 'Niger Delta Produce Transit', region: 'South South' },
  { name: 'Arewa Farm Movers', region: 'North East' },
  { name: 'Odua Fresh Distributors', region: 'South West' },
  { name: 'Eastern Harvest Transit', region: 'South East' },
  { name: 'Middle Belt Supply Network', region: 'North Central' },
  { name: 'Lagos Food Hub Distributors', region: 'South West' },
  { name: 'Kano Grain Transits', region: 'North West' },
  { name: 'Jos Plateau Fresh', region: 'North Central' },
  { name: 'Benue Valley Agro Hub', region: 'North Central' },
  { name: 'Calabar Coastal Freights', region: 'South South' },
  { name: 'Enugu Farm Connect', region: 'South East' },
  { name: 'Sokoto Agro-Allied Logistics', region: 'North West' },
  { name: 'Ibadan Produce Express', region: 'South West' },
  { name: 'Kaduna Green Lines', region: 'North West' },
  { name: 'PH Harvest Movers', region: 'South South' },
  { name: 'Abuja Central Logistics', region: 'North Central' },
  { name: 'Delta Fresh Movers', region: 'South South' },
  { name: 'Ogun Farm to Market', region: 'South West' }
];

export const seedDistributors = async () => {
  try {
    console.log('Clearing old distributors data...');
    await Distributor.deleteMany({}); 

    console.log('Inserting new distributors...');
    await Distributor.insertMany(distributorsData);
    
    console.log('20 Distributors seeded successfully!');
  } catch (error) {
    console.error('Error seeding distributors:', error.message);
  }
};