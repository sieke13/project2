import { Router } from 'express';
import { authenticateToken } from '../../middleware/authMiddleware.js'; 
import { getPosts, createPost } from '../../controllers/forumController.js'; 

const router = Router();

// GET /api/forum/posts - Get all forum posts
router.get('/posts', authenticateToken, getPosts);

// POST /api/forum/posts - Create a new forum post
router.post('/posts', authenticateToken, createPost);

export default router;