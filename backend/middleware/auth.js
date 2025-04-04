const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Authentication required' });

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); // Replace with a strong secret in production
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const restrictToDeveloper = (req, res, next) => {
  if (req.user.role !== 'developer') {
    return res.status(403).json({ error: 'Access denied: Developers only' });
  }
  next();
};

module.exports = { auth, restrictToDeveloper };