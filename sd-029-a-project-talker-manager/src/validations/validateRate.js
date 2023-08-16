const HTTP_BAD_REQUEST_STATUS = 400;

const validateRate = (req, res, next) => {
    const { talk: { rate } } = req.body;
    if (typeof rate === 'undefined') {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "rate" é obrigatório' });
    }
    if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' });
    }
    next();
  };

  module.exports = validateRate;