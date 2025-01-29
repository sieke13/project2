import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(403).json({ message: 'Authorization header missing' });

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.userId = decoded.id;
    next();
  });
};

export default authenticate;