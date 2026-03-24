import { 
  getAllFarmers, 
  getFarmerById, 
  createFarmer, 
  updateFarmer, 
  deleteFarmer 
} from '../services/farmersServices.js'


// GET all farmers
export const getAllFarmersController = async (req, res) => {
  try {
    const farmers = await getAllFarmers();
    res.status(200).json({
      success: true,
      count: farmers.length,
      data: farmers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
}

// GET single farmer
export const getFarmerByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const farmer = await getFarmerById(id);
    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: 'Farmer not found'
      });
    }
    res.status(200).json({
      success: true,
      data: farmer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
}

// CREATE farmer
export const createFarmerController = async (req, res) => {
  try {
    const { name, location, farmSize, produceTypes } = req.body;
    const newFarmer = await createFarmer({ name, location, farmSize, produceTypes });
    res.status(201).json({
      success: true,
      data: newFarmer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
}

// UPDATE farmer
export const updateFarmerController = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No data provided to update'
      })
    }

    const farmer = await updateFarmer(id, updateData);
    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: 'Farmer not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Farmer updated successfully',
      data: farmer
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
}

// DELETE farmer
export const deleteFarmerController = async (req, res) => {
  try {
    const { id } = req.params;
    const farmer = await getFarmerById(id);
    if (!farmer) {
      return res.status(404).json({
        success: false,
        message: 'Farmer not found'
      });
    }
    await deleteFarmer(id);
    res.status(200).json({
      success: true,
      message: 'Farmer deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error',
      error: error.message
    });
  }
}