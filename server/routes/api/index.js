import { Router } from 'express';
import authRoutes from '../authRoutes.js';  
import forumRoutes from './forumRoutes.js'; 
import commentRoutes from './commentRoutes.js';

const router = Router();

// /api/auth
router.use('/auth', authRoutes);

// /api/forum
router.use('/forum', forumRoutes);

// /api/comment
router.use('/comment', commentRoutes);

export default router;