const express = require('express');
const { getPosts, createPost } = require('../controllers/forumController.js');
const authenticate = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', authenticate, createPost);

module.exports = router;
