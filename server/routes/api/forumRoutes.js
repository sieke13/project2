import { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../../controllers/forumController.js'; 

const router = Router();

// GET /api/forum/posts - Get all forum posts
router.get('/posts', getPosts);

// POST /api/forum/posts - Create a new forum post
router.post('/posts', createPost);

// PUT /api/forum/posts/:id - Update a forum post
router.put('/posts/:id', updatePost);

// DELETE /api/forum/posts/:id - Delete a forum post
router.delete('/posts/:id', deletePost);

export default router;