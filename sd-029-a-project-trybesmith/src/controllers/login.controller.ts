import { Request, Response } from 'express';
import { loginService } from '../services';

export const login = async (req: Request, res: Response) => {
  const token = await loginService.login(req.body);

  if (token.status !== 200) {
    return res.status(token.status).send({ message: token.message });
  }

  return res.status(token.status).json({ token: token.message });
};

const loginController = {
  login,
};

export default loginController;
