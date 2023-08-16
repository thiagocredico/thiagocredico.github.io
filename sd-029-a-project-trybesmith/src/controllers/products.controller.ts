import { Request, Response } from 'express';
import { productsService } from '../services';

export const createProduct = async (req: Request, res: Response) => {
  const product = await productsService.createProduct(req.body);
  
  return res.status(201).json(product);
};

export const getAllProducts = async (_req: Request, res: Response) => {
  const products = await productsService.getAllProducts();

  return res.status(200).json(products);
};

const productsController = {
  createProduct,
  getAllProducts,
};

export default productsController;
