const HTTP_BAD_REQUEST_STATUS = 400;

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
      .json({ message: 'O campo "age" é obrigatório' });
  }
  if (typeof age !== 'number' || !Number.isInteger(age) || age < 18) {
    return res.status(HTTP_BAD_REQUEST_STATUS)
    .json({ message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' });
  }
   next();
};

module.exports = validateAge;