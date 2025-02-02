import { Router } from 'express';
import authRoutes from './authRoutes.js';
import apiRoutes from './api/index.js'; 
import forumRoutes from './api/forumRoutes.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

// /api/auth
router.use('/auth', authRoutes);

// /api/api
router.use('/api', authenticateToken, apiRoutes); 

// /api/forum
router.use('/forum', forumRoutes);

export default router;

