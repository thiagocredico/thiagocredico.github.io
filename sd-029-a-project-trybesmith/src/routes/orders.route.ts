import express from 'express';
import { ordersController } from '../controllers';

const ordersRouter = express.Router();

ordersRouter.get('/orders', ordersController.getAllOrders);

export default ordersRouter;
