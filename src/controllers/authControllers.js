import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const register = async (req, res, next) => {
  try {
    const { email, password, role } = req.body;

    // checks if user already exists (Prevent duplicates)
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    // create the user
    const user = await User.create({ email, password, role });

    res.status(201).json({ 
      success: true, 
      message: "User registered successfully",
      data: { id: user._id, email: user.email, role: user.role } 
    });
  } catch (err) { 
    next(err); 
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // find user and explicitly check if they exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // verify password exists and matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }

    // generate JWT token with user ID and role (for authorization)
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET, 
      { expiresIn: '1d' }
    );

    // sends back response
    res.json({ 
      success: true, 
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) { 
    next(err); 
  }
};