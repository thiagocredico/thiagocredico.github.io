const validateUser = (req, res, next) => {
  const { email, password, displayName } = req.body;
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/;

  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  next();
};

module.exports = validateUser;
