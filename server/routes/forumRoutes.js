import express from 'express';
import { getPosts, createPost } from '../controllers/forumController.js';
import authenticate from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', authenticate, createPost);

export default router;
