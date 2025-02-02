import { Router } from 'express';
import authRoutes from '../authRoutes.js';  
import forumRoutes from './forumRoutes.js'; 
const router = Router();

// /api/auth
router.use('/auth', authRoutes);

// /api/forum
router.use('/forum', forumRoutes);

export default router;