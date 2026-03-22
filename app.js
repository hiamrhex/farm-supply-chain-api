import express from 'express';
import connectDB from './src/config/db.js';

// routes
import farmersRouter from './src/routes/farmers.js';
import produceRouter from './src/routes/produce.js';
import batchesRouter from './src/routes/batches.js';
import ordersRouter from './src/routes/orders.js';
import distributorsRouter from './src/routes/distributors.js';
import retailersRouter from './src/routes/retailers.js';

// middlewares
import { logger } from './src/middlewares/logger.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

connectDB();

const app = express();

app.use(express.json());
app.use(logger);

app.use('/farmers', farmersRouter);
app.use('/produce', produceRouter);
app.use('/batches', batchesRouter);
app.use('/orders', ordersRouter);
app.use('/distributors', distributorsRouter);
app.use('/retailers', retailersRouter);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});