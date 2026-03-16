import express from 'express';
import farmersRouter from './src/routes/farmers.js';
import produceRouter from './src/routes/produce.js';
import batchesRouter from './src/routes/batches.js';
import ordersRouter from './src/routes/orders.js';
import distributorsRouter from './src/routes/distributors.js';
import retailersRouter from './src/routes/retailers.js';
    

const app = express();

app.use(express.json());

// Routes
app.use('/farmers', farmersRouter);
app.use('/produce', produceRouter);
app.use('/batches', batchesRouter);
app.use('/orders', ordersRouter);
app.use('/distributors', distributorsRouter);
app.use('/retailers', retailersRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Farm Supply Chain API!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});