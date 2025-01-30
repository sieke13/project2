import { Router } from 'express';
import userRouter from './userRoutes.js';
import forumRoutes from './forumRoutes.js';

const router = Router();

router.use('/users', userRouter);
router.use('/forum', forumRoutes);

export default router;