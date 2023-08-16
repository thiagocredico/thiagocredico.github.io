const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { JWT_SECRET } = process.env;

const signUp = async (displayName, email, password, image) => {
  try {
    const userPayload = image
      ? { displayName, email, password, image }
      : { displayName, email, password };

    await User.create(userPayload);

    const token = jwt.sign({ email }, JWT_SECRET, { algorithm: 'HS256' });

    return token;
  } catch (error) {
    return { message: 'User already registered' };
  }
};

const getAllUsers = async () =>
  User.findAll({ attributes: { exclude: ['password'] } });

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return user || null;
};

const deleteSelfUser = async (userId) => {
  const user = await User.destroy({ where: { id: userId } });

  return user || null;
};

module.exports = {
  signUp,
  getAllUsers,
  getUserById,
  deleteSelfUser,
};
