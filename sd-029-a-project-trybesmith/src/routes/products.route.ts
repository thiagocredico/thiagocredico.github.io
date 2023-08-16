import express from 'express';
import { productsController } from '../controllers';
import validateProduct from '../middlerwares/validateProduct';

const productsRouter = express.Router();

productsRouter.post('/products', validateProduct, productsController.createProduct);
productsRouter.get('/products', productsController.getAllProducts);

export default productsRouter;
