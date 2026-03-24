import Order from '../models/Order.js';
import Retailer from '../models/Retailer.js';
import Produce from '../models/Produce.js';

export const seedOrders = async () => {
  try {
    console.log('Preparing to seed orders...');

    const retailers = await Retailer.find();
    const produceList = await Produce.find();

    if (retailers.length === 0 || produceList.length === 0) {
      console.log('Cannot seed Orders yet!');
      console.log('Junya must seed Retailers and Deborne must seed Produce first.');
      return; 
    }

    console.log('Clearing old orders data...');
    await Order.deleteMany({});

    const ordersData = [];
    const statuses = ['pending', 'shipped', 'delivered'];

    for (let i = 0; i < 20; i++) {
      const randomRetailer = retailers[Math.floor(Math.random() * retailers.length)];
      const randomProduce = produceList[Math.floor(Math.random() * produceList.length)];
     
      const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
      
      const randomQuantity = Math.floor(Math.random() * 490) + 10;

      ordersData.push({
        retailerId: randomRetailer._id,
        produceId: randomProduce._id,
        quantity: randomQuantity,
        status: randomStatus
      });
    }

    console.log('Inserting new orders...');
    await Order.insertMany(ordersData);
    
    console.log('20 Orders seeded successfully!');
  } catch (error) {
    console.error('Error seeding orders:', error.message);
  }
};