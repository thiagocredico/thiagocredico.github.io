const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    // console.log('email', email);
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  next();
};

module.exports = validateLogin;
