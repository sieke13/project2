import { Router } from 'express';
import authRoutes from './authRoutes.js';
import apiRoutes from './api/index.js'; 
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = Router();

// ✅ Allow authentication routes (`/register` and `/login`) without token
router.use('/auth', authRoutes);

// ✅ Protect `/api` routes, but NOT `/auth`
router.use('/api', authenticateToken, apiRoutes); 

export default router;
