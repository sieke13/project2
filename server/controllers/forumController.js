const ForumPost = require('../models/ForumPost.js');  

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
