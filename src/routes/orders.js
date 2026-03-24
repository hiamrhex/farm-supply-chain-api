import express from 'express';

const router = express.Router();

// GET all orders
router.get('/', (req, res) => {
  res.json({ message: 'Get all orders' });
});

// GET single order
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Get order with ID ${id}` });
});

// CREATE order
router.post('/', (req, res) => {
  const { farmerId, produceId, quantity } = req.body;
  res.json({ message: 'Create new order', data: { farmerId, produceId, quantity } });
});

// UPDATE order
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { farmerId, produceId, quantity } = req.body;
  res.json({ message: `Update order with ID ${id}`, data: { farmerId, produceId, quantity } });
});

// DELETE order
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `Delete order with ID ${id}` });
});

export default router