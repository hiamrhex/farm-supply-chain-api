import * as distributorsService from '../services/distributorsServices.js';

const createDistributor = async (req, res, next) => {
  try {
    const distributor = await distributorsService.createDistributor(req.body);
    res.status(201).json({ success: true, data: distributor });
  } catch (err) {
    next(err);
  }
};

const getAllDistributors = async (req, res, next) => {
  try {
    const distributors = await distributorsService.getAllDistributors();
    res.status(200).json({ success: true, count: distributors.length, data: distributors });
  } catch (err) {
    next(err);
  }
};

const getDistributorById = async (req, res, next) => {
  try {
    const distributor = await distributorsService.getDistributorById(req.params.id);
    if (!distributor) return res.status(404).json({ success: false, message: 'Distributor not found' });
    
    res.status(200).json({ success: true, data: distributor });
  } catch (err) {
    next(err);
  }
};

const updateDistributor = async (req, res, next) => {
  try {
    const updated = await distributorsService.updateDistributor(req.params.id, req.body);
    if (!updated) return res.status(404).json({ success: false, message: 'Distributor not found' });
    
    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    next(err);
  }
};

const deleteDistributor = async (req, res, next) => {
  try {
    const deleted = await distributorsService.deleteDistributor(req.params.id);
    if (!deleted) return res.status(404).json({ success: false, message: 'Distributor not found' });
    
    res.status(200).json({ success: true, message: 'Distributor deleted successfully' });
  } catch (err) {
    next(err);
  }
};

export default {
  createDistributor,
  getAllDistributors,
  getDistributorById,
  updateDistributor,
  deleteDistributor,
};