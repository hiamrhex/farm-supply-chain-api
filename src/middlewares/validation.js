export const validateBody = (req, res, next) => {
  
  if (req.method === 'POST' || req.method === 'PUT') {
    if (Object.keys(req.body).length === 0) {
      const error = new Error('Request body cannot be empty');
      res.status(400); // 400 means "Bad Request"
      return next(error);
    }
  }
  next();
};