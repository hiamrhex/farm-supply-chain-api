import jwt from 'jsonwebtoken';

// for authentication
export const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attaches user (id and role) to the request object
    req.user = decoded; 
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: "Your session has expired. Please login again." });
    }
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

//  for authorization
export const authorize = (...roles) => {
  return (req, res, next) => {
    // Check if the user's role (from the token) is in the allowed list
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Access denied. Role '${req.user.role}' is not authorized for this action.` 
      });
    }
    next();
  };
};