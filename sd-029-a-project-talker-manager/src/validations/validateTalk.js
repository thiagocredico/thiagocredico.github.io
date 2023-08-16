const HTTP_BAD_REQUEST_STATUS = 400;

const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    if (!talk) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "talk" é obrigatório' });
    }
    next();
  };

  module.exports = validateTalk;