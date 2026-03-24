import Distributor from '../models/Distributor.js';

export const createDistributor = async (data) => {
  return await Distributor.create(data);
};

export const getAllDistributors = async () => {
  return await Distributor.find();
};

export const getDistributorById = async (id) => {
  const distributor = await Distributor.findById(id);
  if (!distributor) throw new Error('Distributor not found');
  return distributor;
};

export const updateDistributor = async (id, data) => {
  const updated = await Distributor.findByIdAndUpdate(id, data, { 
    new: true, 
    runValidators: true 
  });
  if (!updated) throw new Error('Distributor not found');
  return updated;
};

export const deleteDistributor = async (id) => {
  const deleted = await Distributor.findByIdAndDelete(id);
  if (!deleted) throw new Error('Distributor not found');
};