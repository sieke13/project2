import { Router } from 'express';
import authRoutes from './authRoutes.js';
import apiRoutes from './api/index.js'; 
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();
// /api/auth
router.use('/auth', authRoutes);

// /api/api
router.use('/api', apiRoutes); 

export default router;
