import { Request, Response } from 'express';
import { ordersService } from '../services';

export const getAllOrders = async (req: Request, res: Response) => {
  const allOrders = await ordersService.getAllOrders();

  return res.status(200).json(allOrders);
};

const ordersController = {
  getAllOrders,
};

export default ordersController;
