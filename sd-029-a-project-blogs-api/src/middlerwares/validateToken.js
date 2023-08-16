const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    console.log(authorization);

    const token = authorization.startsWith('Bearer ')
      ? authorization.split(' ')[1]
      : authorization;
    const userData = jwt.verify(token, JWT_SECRET);
    console.log('userID', userData.userId);
    req.userId = userData.userId;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
