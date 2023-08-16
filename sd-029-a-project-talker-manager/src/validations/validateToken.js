const HTTP_UNAUTHORIZED_STATUS = 401;    

const validateToken = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(HTTP_UNAUTHORIZED_STATUS)
        .json({ message: 'Token não encontrado' });
    }
    if (authorization.length !== 16 || typeof authorization !== 'string') {
      return res.status(HTTP_UNAUTHORIZED_STATUS)
        .json({ message: 'Token inválido' });
    }
    next();
  };

  module.exports = validateToken;