const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const authenticate = require('../middleware/authMiddleware');

router.get('/posts', forumController.getPosts);
router.post('/posts', authenticate, forumController.createPost);

module.exports = router;

