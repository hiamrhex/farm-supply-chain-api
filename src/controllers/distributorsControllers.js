import * as distributorService from '../services/distributorsService.js';

export const createDistributor = async (req, res, next) => {
  try {
    const distributor = await distributorService.createDistributor(req.body);
    res.status(201).json(distributor);
  } catch (err) {
    next(err);
  }
};

export const getAllDistributors = async (req, res, next) => {
  try {
    const distributors = await distributorService.getAllDistributors();
    res.json(distributors);
  } catch (err) {
    next(err);
  }
};

export const getDistributorById = async (req, res, next) => {
  try {
    const distributor = await distributorService.getDistributorById(req.params.id);
    res.json(distributor);
  } catch (err) {
    next(err);
  }
};

export const updateDistributor = async (req, res, next) => {
  try {
    const updated = await distributorService.updateDistributor(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
};

export const deleteDistributor = async (req, res, next) => {
  try {
    await distributorService.deleteDistributor(req.params.id);
    res.json({ message: 'Distributor deleted successfully' });
  } catch (err) {
    next(err);
  }
};