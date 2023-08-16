const HTTP_BAD_REQUEST_STATUS = 400;

const validateWatchedAt = (req, res, next) => {
    const { talk: { watchedAt } } = req.body;
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!watchedAt) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!regex.test(watchedAt)) {
      return res.status(HTTP_BAD_REQUEST_STATUS)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
  };

  module.exports = validateWatchedAt;