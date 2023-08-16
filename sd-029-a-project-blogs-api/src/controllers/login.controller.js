const { loginService } = require('../services');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginService.login(email, password);

    if (!token.message) {
      return res.status(200).json({ token });
    }

    return res.status(400).json({ message: token.message });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { login };
