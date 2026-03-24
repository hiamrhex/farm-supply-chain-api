import Produce from "../models/Produce.js";

const produceData = [
  {name: 'Mango', category: 'fruit', unitPrice: 2.5, availableQuantity: 500},
  {name: 'Banana', category: 'fruit', unitPrice: 1.2, availableQuantity: 800},
  {name: 'Pineapple', category: 'fruit', unitPrice: 3.0, availableQuantity: 300},
  {name: 'Watermelon', category: 'fruit', unitPrice: 4.5, availableQuantity: 200},
  {name: 'Orange', category: 'fruit', unitPrice: 1.8, availableQuantity: 650},
  {name: 'Coconut', category: 'fruit', unitPrice: 2.5, availableQuantity: 300},
  {name: 'Tomato', category: 'vegetable', unitPrice: 1.0, availableQuantity: 1000},
  {name: 'Carrot', category: 'vegetable', unitPrice: 0.8, availableQuantity: 900},
  {name: 'Spinach', category: 'vegetable', unitPrice: 1.5, availableQuantity: 400},
  {name: 'Cabbage', category: 'vegetable', unitPrice: 1.2, availableQuantity: 600},
  {name: 'Onion', category: 'vegetable', unitPrice: 0.9, availableQuantity: 1200},
  {name: 'Rice', category: 'grain', unitPrice: 2.0, availableQuantity: 2000},
  {name: 'Wheat', category: 'grain', unitPrice: 1.8, availableQuantity: 1500},
  {name: 'Maize', category: 'grain', unitPrice: 1.5, availableQuantity: 1800},
  {name: 'Sorghum', category: 'grain', unitPrice: 1.3, availableQuantity: 700},
  {name: 'Black Beans', category: 'legume', unitPrice: 2.2, availableQuantity: 500},
  {name: 'Lentils', category: 'legume', unitPrice: 2.5, availableQuantity: 450},
  {name: 'Chickpeas', category: 'legume', unitPrice: 2.8, availableQuantity: 350},
  {name: 'Cassava', category: 'tuber', unitPrice: 1.0, availableQuantity: 800},
  {name: 'Sweet Potato', category: 'tuber', unitPrice: 1.4, availableQuantity: 600},
  {name: 'Yam', category: 'tuber', unitPrice: 1.6, availableQuantity: 500},
  {name: 'Ginger', category: 'spice', unitPrice: 5.0, availableQuantity: 150},
  {name: 'Turmeric', category: 'spice', unitPrice: 6.0, availableQuantity: 120},
  {name: 'Basil', category: 'herb', unitPrice: 3.5, availableQuantity: 200},
  {name: 'Groundnut', category: 'nut', unitPrice: 3.0, availableQuantity: 400},
];

export const seedProduce = async () => {
  try {
    console.log('Preparing to seed produce...');
    
    await Produce.deleteMany({});
    console.log('Existing produce data cleared.');

    const inserted = await Produce.insertMany(produceData);
    console.log(`${inserted.length} produce records inserted successfully!`);

  } catch (error) {
    console.error('Error seeding produce database:', error.message);
    throw error;
  }
};