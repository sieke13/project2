const ForumPost = require('../models/ForumPost.js');  // Import the ForumPost model

exports.getPosts = async (req, res) => {
  try {
    // Get all posts from the database
    const posts = await ForumPost.findAll();

    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

//Added to verify server
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required' });
    }

    const newPost = await ForumPost.create({
      title,
      content,
    });

    res.status(201).json(newPost);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};