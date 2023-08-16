const { userService } = require('../services');

const signUp = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const token = await userService.signUp(displayName, email, password, image);

    if (!token.message) {
      return res.status(201).json({ token });
    }

    return res.status(409).json({ message: token.message });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getUserById(id);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteSelfUser = async (req, res) => {
  try {
    const { userId } = req;
    const user = await userService.deleteSelfUser(userId);

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  signUp,
  getAllUsers,
  getUserById,
  deleteSelfUser,
};
