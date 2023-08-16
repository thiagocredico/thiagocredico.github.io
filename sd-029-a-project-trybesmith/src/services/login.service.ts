import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

const { JWT_SECRET = 'jwt_secret' } = process.env;

export const generateToken = (userId: number, username: string): string => 
  jwt.sign({ id: userId, username }, JWT_SECRET);

export const login = async (user: { username: string; password: string }): 
Promise<{ status: number; message: string }> => {
  const { username, password } = user;

  if (!username || !password) {
    return { status: 400, message: '"username" and "password" are required' };
  }

  const userData = await UserModel.findOne({ where: { username } });

  if (!userData || !bcrypt.compareSync(password, userData.dataValues.password)) {
    return { status: 401, message: 'Username or password invalid' };
  }

  const token = generateToken(userData.dataValues.id, username);

  return { status: 200, message: token };
};

const loginService = {
  login,
};

export default loginService;
