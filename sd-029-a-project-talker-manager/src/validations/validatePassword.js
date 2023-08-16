const HTTP_BAD_REQUEST_STATUS = 400;

const validatePassword = (req, res, next) => {
    const { password } = req.body;
    const regex = /[0-9a-zA-Z]{6,}$/;
    if (!password) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "password" é obrigatório' });
    }
    if (!regex.test(password)) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
  };

  module.exports = validatePassword;