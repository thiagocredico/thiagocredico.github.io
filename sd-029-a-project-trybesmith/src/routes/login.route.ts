import express from 'express';
import { loginController } from '../controllers';
import validateLogin from '../middlerwares/validateLogin';

const loginRouter = express.Router();

loginRouter.post('/login', validateLogin, loginController.login);

export default loginRouter;