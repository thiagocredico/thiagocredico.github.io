import { Router } from 'express';
import productsRouter from './products.route';
import ordersRouter from './orders.route';
import loginRouter from './login.route';

const router = Router();

router.use('/', productsRouter);
router.use('/', ordersRouter);
router.use('/', loginRouter);

export default router;